import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';

export class DashboardsNullClientV1 implements IDashboardsClientV1 {

    public async getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1> {
        return null;
    }

    public async deleteDashboards(correlationId: string, filter: FilterParams): Promise<void> {
        return null;
    }
            
    public async getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>> {
        return new DataPage<DashboardV1>([], 0);
    }

    public async setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1> {
        return dashboard;
    }

}