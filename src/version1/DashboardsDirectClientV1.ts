import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';
//import { IDashboardsController } from 'service-dashboards-node';

export class DashboardsDirectClientV1 extends DirectClient<any> implements IDashboardsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-dashboards", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>> {
        let timing = this.instrument(correlationId, 'dashboards.get_dashboards');
        
        try {
            return await this._controller.getDashboards(correlationId, filter, paging);
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
            return await this._controller.getDashboard(correlationId, userId, app, kind);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1> {
        let timing = this.instrument(correlationId, 'dashboards.set_dashboard');

        try {
            return await this._controller.setDashboard(correlationId, dashboard);
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
            await this._controller.deleteDashboards(correlationId, filter);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}