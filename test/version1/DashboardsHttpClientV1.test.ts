import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { DashboardsMemoryPersistence } from 'service-dashboards-node';
import { DashboardsController } from 'service-dashboards-node';
import { DashboardsHttpServiceV1 } from 'service-dashboards-node';
import { DashboardsHttpClientV1 } from '../../src/version1/DashboardsHttpClientV1';
import { DashboardsClientFixtureV1 } from './DashboardsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('DashboardsHttpClientV1', ()=> {
    let service: DashboardsHttpServiceV1;
    let client: DashboardsHttpClientV1;
    let fixture: DashboardsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new DashboardsMemoryPersistence();
        let controller = new DashboardsController();

        service = new DashboardsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-dashboards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-dashboards', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-dashboards', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new DashboardsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new DashboardsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
