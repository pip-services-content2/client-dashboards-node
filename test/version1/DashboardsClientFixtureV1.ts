const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';

import { IDashboardsClientV1 } from '../../src/version1/IDashboardsClientV1';
import { TileGroupV1 } from '../../src/version1/TileGroupV1';
import { DashboardV1 } from '../../src/version1/DashboardV1';

let DASHBOARD = <DashboardV1>{
    user_id: '1',
    app: 'Test App 1',
    groups: []
};

export class DashboardsClientFixtureV1 {
    private _client: IDashboardsClientV1;
    
    constructor(client: IDashboardsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let dashboard1: DashboardV1;

        // Create one dashboard
        let dashboard = await this._client.getDashboard(null, DASHBOARD.user_id, DASHBOARD.app, null);

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, DASHBOARD.user_id);
        assert.equal(dashboard.app, DASHBOARD.app);

        dashboard1 = dashboard;

        // Set the dashboard
        dashboard1.groups = [<TileGroupV1>{ index: 0, tiles: [] }];

        dashboard = await this._client.setDashboard(null, dashboard1);

        assert.isObject(dashboard);
        assert.equal(dashboard.app, DASHBOARD.app);
        assert.lengthOf(dashboard.groups, 1);

        dashboard1 = dashboard;

        // Delete dashboard
        await this._client.deleteDashboards(
            null,
            FilterParams.fromTuples(
                'user_id', DASHBOARD.user_id,
                'app', DASHBOARD.app
            )
        );
    }
}
