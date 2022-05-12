import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DashboardV1 } from './DashboardV1';
import { IDashboardsClientV1 } from './IDashboardsClientV1';
export declare class DashboardsNullClientV1 implements IDashboardsClientV1 {
    getDashboard(correlationId: string, userId: string, app: string, kind: string): Promise<DashboardV1>;
    deleteDashboards(correlationId: string, filter: FilterParams): Promise<void>;
    getDashboards(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<DashboardV1>>;
    setDashboard(correlationId: string, dashboard: DashboardV1): Promise<DashboardV1>;
}
