"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const DashboardsNullClientV1_1 = require("../version1/DashboardsNullClientV1");
const DashboardsDirectClientV1_1 = require("../version1/DashboardsDirectClientV1");
const DashboardsHttpClientV1_1 = require("../version1/DashboardsHttpClientV1");
const DashboardsLambdaClientV1_1 = require("../version1/DashboardsLambdaClientV1");
class DashboardsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(DashboardsClientFactory.NullClientV1Descriptor, DashboardsNullClientV1_1.DashboardsNullClientV1);
        this.registerAsType(DashboardsClientFactory.DirectClientV1Descriptor, DashboardsDirectClientV1_1.DashboardsDirectClientV1);
        this.registerAsType(DashboardsClientFactory.HttpClientV1Descriptor, DashboardsHttpClientV1_1.DashboardsHttpClientV1);
        this.registerAsType(DashboardsClientFactory.LambdaClientV1Descriptor, DashboardsLambdaClientV1_1.DashboardsLambdaClientV1);
    }
}
exports.DashboardsClientFactory = DashboardsClientFactory;
DashboardsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'factory', 'default', 'default', '1.0');
DashboardsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'client', 'null', 'default', '1.0');
DashboardsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'client', 'direct', 'default', '1.0');
DashboardsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'client', 'http', 'default', '1.0');
DashboardsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=DashboardsClientFactory.js.map