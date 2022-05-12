import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { DashboardsMemoryPersistence } from 'service-dashboards-node';
import { DashboardsController } from 'service-dashboards-node';
import { DashboardsDirectClientV1 } from '../../src/version1/DashboardsDirectClientV1';
import { DashboardsClientFixtureV1 } from './DashboardsClientFixtureV1';

suite('DashboardsDirectClientV1', ()=> {
    let client: DashboardsDirectClientV1;
    let fixture: DashboardsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new DashboardsMemoryPersistence();
        let controller = new DashboardsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-dashboards', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-dashboards', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new DashboardsDirectClientV1();
        client.setReferences(references);

        fixture = new DashboardsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
