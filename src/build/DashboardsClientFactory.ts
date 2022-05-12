import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { DashboardsNullClientV1 } from '../version1/DashboardsNullClientV1';
import { DashboardsDirectClientV1 } from '../version1/DashboardsDirectClientV1';
import { DashboardsHttpClientV1 } from '../version1/DashboardsHttpClientV1';
import { DashboardsLambdaClientV1 } from '../version1/DashboardsLambdaClientV1';

export class DashboardsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-dashboards', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-dashboards', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-dashboards', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-dashboards', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-dashboards', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(DashboardsClientFactory.NullClientV1Descriptor, DashboardsNullClientV1);
		this.registerAsType(DashboardsClientFactory.DirectClientV1Descriptor, DashboardsDirectClientV1);
		this.registerAsType(DashboardsClientFactory.HttpClientV1Descriptor, DashboardsHttpClientV1);
		this.registerAsType(DashboardsClientFactory.LambdaClientV1Descriptor, DashboardsLambdaClientV1);
	}
	
}
