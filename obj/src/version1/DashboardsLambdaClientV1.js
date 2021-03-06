"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardsLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class DashboardsLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('dashboards');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getDashboards(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'dashboards.get_dashboards');
            try {
                return yield this.callCommand('get_dashboards', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getDashboard(correlationId, userId, app, kind) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'dashboards.get_dashboard');
            try {
                return yield this.callCommand('get_dashboard', correlationId, {
                    user_id: userId,
                    app: app,
                    kind: kind
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setDashboard(correlationId, dashboard) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'dashboards.get_dashboard');
            try {
                return yield this.callCommand('get_dashboard', correlationId, {
                    dashboard: dashboard,
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteDashboards(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'dashboards.delete_dashboards');
            try {
                yield this.callCommand('delete_dashboards', correlationId, {
                    filter: filter
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.DashboardsLambdaClientV1 = DashboardsLambdaClientV1;
//# sourceMappingURL=DashboardsLambdaClientV1.js.map