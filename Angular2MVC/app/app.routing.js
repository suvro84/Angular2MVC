"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var fetchdata_component_1 = require("./components/fetchdata/fetchdata.component");
var Registration_component_1 = require("./components/Registration/Registration.component");
var customer_inquiry_component_1 = require("./Components/Customer/customer-inquiry.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'fetchdata', component: fetchdata_component_1.FetchDataComponent },
    { path: 'Registration', component: Registration_component_1.RegistrationComponent },
    { path: 'customer/customerinquiry', component: customer_inquiry_component_1.CustomerInquiryComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map