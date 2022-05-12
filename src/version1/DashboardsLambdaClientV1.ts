import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';

export class DashboardsLambdaClientV1 extends CommandableLambdaClient implements IDashboardsClientV1 {

    constructor(config?: any) {
        super('dashboards');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
       
    public async getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>> {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboards');

        try {
            return await this.callCommand(
                'get_dashboards',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1> {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboard');

        try {
            return await this.callCommand(
                'get_dashboard',
                correlationId,
                {
                    user_id: userId,
                    app: app,
                    kind: kind
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1> {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboard');

        try {
            return await this.callCommand(
                'get_dashboard',
                correlationId,
                {
                    dashboard: dashboard,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteDashboards(correlationId: string, filter: FilterParams): Promise<void> {
        let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
        
        try {
            await this.callCommand(
                'delete_dashboards',
                correlationId,
                {
                    filter: filter
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
