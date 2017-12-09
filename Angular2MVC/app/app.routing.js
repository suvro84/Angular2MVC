"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var Registration_component_1 = require("./components/Registration/Registration.component");
var customer_inquiry_component_1 = require("./Components/Customer/customer-inquiry.component");
//const appRoutes: Routes = [
//    { path: '', redirectTo: 'home', pathMatch: 'full' },
//    { path: 'home', component: HomeComponent },
//    { path: 'user', component: UserComponent }
//    , { path: 'fetchdata', component: FetchDataComponent }
//    , { path: 'Registration', component: RegistrationComponent }
//     ,  { path: 'customer/customerinquiry', component: CustomerInquiryComponent },
//];
//export const routing: ModuleWithProviders =
//    RouterModule.forRoot(appRoutes);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'user', component: user_component_1.UserComponent },
                    { path: 'fetchdata', component: fetchdata_component_1.FetchDataComponent },
                    { path: 'Registration', component: Registration_component_1.RegistrationComponent },
                    { path: 'customer/customerinquiry', component: customer_inquiry_component_1.CustomerInquiryComponent }
                ], { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map