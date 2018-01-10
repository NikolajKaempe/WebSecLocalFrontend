webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NAVIGATION -->\r\n<app-navigation></app-navigation>\r\n\r\n<!-- VIEWS ARE LOADED HERE -->\r\n<router-outlet></router-outlet>\r\n<!-- VIEWS ARE LOADED HERE -->\r\n\r\n<!-- FOOTER -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.title = 'app';
        if (this._authService.isAuthenticated()) {
            this._router.navigate(['/home']);
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var apiBaseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
var Config = {
    apiPostsUrl: apiBaseUrl + "/PostController.php",
    apiUserPostsUrl: function (user_id) {
        return apiBaseUrl + "/PostController.php?user_id=" + user_id;
    },
    apiCommentsUrl: apiBaseUrl + "/CommentController.php",
    apiLoginUrl: apiBaseUrl + "/UserController.php/Login",
    apiRegisterUrl: apiBaseUrl + "/UserController.php/Register",
    apiPictureUrl: apiBaseUrl + "/UserController.php/Picture",
    apiAccountPreferencesUrl: apiBaseUrl + "/PreferenceController.php/User",
    apiAccountPreferenceTypesUrl: apiBaseUrl + "/PreferenceController.php/Types",
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_private_component_private_component_component__ = __webpack_require__("../../../../../src/app/components/private-component/private-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_friends_friends_component__ = __webpack_require__("../../../../../src/app/components/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_testerium_testerium_component__ = __webpack_require__("../../../../../src/app/components/testerium/testerium.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//==============================================================================
// [ COMPONENTS START ]
//==============================================================================














//==============================================================================
// [ COMPONENTS END ]
//==============================================================================
//==============================================================================
// [ SERVICES START ]
//==============================================================================





//==============================================================================
// [ SERVICES END ]
//==============================================================================
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_private_component_private_component_component__["a" /* PrivateComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_create_post_create_post_component__["a" /* CreatePostComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_testerium_testerium_component__["a" /* TesteriumComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__app_routing__["a" /* Router */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_alert_service_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_23__services_auth_guard_service__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_private_component_private_component_component__ = __webpack_require__("../../../../../src/app/components/private-component/private-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_create_post_create_post_component__ = __webpack_require__("../../../../../src/app/components/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");

// AUTH GUARD SERVICE

// COMPONENTS








//ROUTES
var routes = [
    // ANONYMOUS ROUTES
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:user_id', component: __WEBPACK_IMPORTED_MODULE_9__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    //    { path: 'friends', component: FriendsComponent },      
    //    { path: 'testerium', component: TesteriumComponent, canActivate: [AuthGuard]},
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_main_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_8__components_create_post_create_post_component__["a" /* CreatePostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'private', component: __WEBPACK_IMPORTED_MODULE_6__components_private_component_private_component_component__["a" /* PrivateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var Router = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-create-post{\r\n    margin: 15px;\r\n}\r\n\r\n.page-title{\r\n    margin-top: 10px;\r\n    color: #9c9c9c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"page-title\">Create a Post</h3>\r\n  <br>\r\n  \r\n  <form [formGroup]=\"postForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    \r\n    <!-- TITLE -->\r\n    <div class=\"form-group row\">\r\n      <label for=\"title\" class=\"col-sm-2 col-form-label\">Title</label>\r\n      <div class=\"col-sm-12\">\r\n        <input type=\"text\" class=\"form-control\" [class.valid-field]=\"isValidField('title')\" id=\"title\" placeholder=\"Title\"\r\n          formControlName=\"title\">\r\n      </div>\r\n\r\n      <!-- CONTENT -->\r\n      <label for=\"content\" class=\"col-sm-2 col-form-label\">Content</label>\r\n      <div class=\"col-sm-12\">\r\n        <textarea rows=\"4\" cols=\"50\" class=\"form-control\" [class.valid-field]=\"isValidField('content')\" id=\"content\" placeholder=\"Content\"\r\n          formControlName=\"content\">\r\n        </textarea>\r\n      </div>\r\n\r\n      <!-- SUBMIT BUTTON -->\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-success btn-create-post\" [class.btn-disabled]=\"!isValidForm()\" [disabled]=\"!isValidForm()\">\r\n                      Create Post\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_postModel__ = __webpack_require__("../../../../../src/app/models/postModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreatePostComponent = (function () {
    function CreatePostComponent(_formBuilder, _postsService, _alert, _router) {
        this._formBuilder = _formBuilder;
        this._postsService = _postsService;
        this._alert = _alert;
        this._router = _router;
        this.createForm();
    }
    // ===========================================================================
    // FUNCTIONS  
    CreatePostComponent.prototype.submitForm = function () {
        var _this = this;
        // @TODO: SANITIZE INPUT ?
        this._postsService.savePost(this.makeNewPost())
            .then(function (response) {
            // Clear the form
            _this.postForm.reset();
            // Inform user
            _this._alert.success("Success", "Post '" + response.title + "' is successfully created!");
            // Redirect to posts
            _this._router.navigate(['/home']);
        });
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.createForm = function () {
        this.postForm = this._formBuilder.group({
            title: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(20)])
            ],
            content: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5)])
            ]
        });
    };
    Object.defineProperty(CreatePostComponent.prototype, "title", {
        // ---------------------------------------------------------------------------
        // FORM GETTERS
        get: function () { return this.postForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "content", {
        get: function () { return this.postForm.get('content'); },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.isValidField = function (fieldName) {
        return this.postForm.get(fieldName).status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.isValidForm = function () {
        return this.postForm.status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    CreatePostComponent.prototype.makeNewPost = function () {
        var newPost = new __WEBPACK_IMPORTED_MODULE_3__models_postModel__["a" /* Post */]();
        newPost.title = this.postForm.value.title;
        newPost.content = this.postForm.value.content;
        return newPost;
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-post',
        template: __webpack_require__("../../../../../src/app/components/create-post/create-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-post/create-post.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_alert_service_service__["a" /* AlertService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_posts_service__["a" /* PostsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CreatePostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>My friends......</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsComponent = (function () {
    function FriendsComponent() {
    }
    FriendsComponent.prototype.ngOnInit = function () {
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friends',
        template: __webpack_require__("../../../../../src/app/components/friends/friends.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/friends/friends.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FriendsComponent);

//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-image{\r\n    width: 450px;\r\n    height: 100%;\r\n}\r\n\r\n.flex-center{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.landing-slogan{\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 25px;\r\n    color: rgb(119, 117, 117);\r\n    margin-top: 30px;\r\n}\r\n\r\n.landing-button{\r\n    /*min-width: 140px;\r\n    min-height: 60px;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    border-radius: 5px;*/\r\n    margin: 10px;\r\n    /*color: rgb(255, 255, 255);*/\r\n    font-size: 18px;\r\n}\r\n\r\n.landing-button-login{\r\n    color:rgb(66, 103, 178);\r\n}\r\n\r\n.landing-button-register{\r\n    color: rgb(76, 175, 80);\r\n}\r\n\r\n.anding-button span{\r\n    margin-left: 5px;\r\n}\r\n\r\n.landing-button-text{\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.landing-branding{\r\n    margin: 0 5px;\r\n    color:rgb(66, 103, 178);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!--LANDING PICTURE-->\r\n  <div class=\"flex-center\">\r\n    <img src=\"assets/images/landing-picture3.png\" alt=\"\" class=\"landing-image\">\r\n  </div>\r\n\r\n  <!--SLOGAN-->\r\n  <div class=\"landing-slogan flex-center\">\r\n    With <span class=\"landing-branding\">FacePost</span> the world is at your fingertips\r\n  </div>\r\n\r\n  <!-- BUTTONS-->\r\n  <div class=\"flex-center\">\r\n    <!--Login-->\r\n    <a routerLink=\"/login\" class=\"landing-button landing-button-login\">\r\n      <i class=\"fa fa-sign-in\" aria-hidden=\"true\">\r\n        <span class=\"landing-button-text\">Login</span>\r\n      </i>\r\n    </a>\r\n    <!--Register-->\r\n    <a routerLink=\"/register\" class=\"landing-button landing-button-register\">\r\n      <i class=\"fa fa-user-plus\" aria-hidden=\"true\">\r\n        <span class=\"landing-button-text\">Register</span>\r\n      </i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<!--=========================================================================-->\r\n<!--<div class=\"container\">\r\n  <h1 class=\"header\">FacePost</h1>\r\n  <br> Welcome to <span class=\"brand-name\">FacePost</span>, choose wisely...\r\n  <br>\r\n  <button class=\"btn btn-danger btn-goto-login\" routerLink=\"/login\">\r\n      Login to existing account\r\n  </button>\r\n  <button class=\"btn btn-danger btn-goto-create-account\" routerLink=\"/register\">\r\n    Create a new account\r\n  </button>\r\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
    })
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Login Form</h3>\r\n  <br>\r\n\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"submitForm()\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"username\" \r\n               class=\"form-control\" \r\n               id=\"username\" \r\n               placeholder=\"username\"\r\n               [(ngModel)]=\"loginModel.username\" name=\"username\"\r\n               required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"password\" \r\n               class=\"form-control\" \r\n               id=\"password\" \r\n               placeholder=\"Password\"\r\n               [(ngModel)]=\"loginModel.password\" name=\"password\"\r\n               required>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"offset-sm-2 col-sm-6\">\r\n        <button class=\"btn btn-primary\"\r\n                [class.btn-disabled]=\"!loginForm.form.valid\"\r\n                [disabled]=\"!loginForm.form.valid\">Sign in</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_loginModel__ = __webpack_require__("../../../../../src/app/models/loginModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_auth, alert, router) {
        this._auth = _auth;
        this.alert = alert;
        this.router = router;
        this.loginModel = new __WEBPACK_IMPORTED_MODULE_2__models_loginModel__["a" /* LoginModel */]();
    }
    LoginComponent.prototype.submitForm = function () {
        this.login(this.loginModel);
    };
    //------------------------------------------------
    // Login
    LoginComponent.prototype.login = function (credentials) {
        var _this = this;
        this._auth.login(credentials)
            .then(function (response) {
            if (_this._auth.isAuthenticated()) {
                _this._resetLoginForm();
                _this.alert.success("Success", "Welcome Back ;)");
                setTimeout(function () {
                    _this.router.navigate(['home']);
                    location.reload();
                }, 1500);
            }
        })
            .catch(function (response) {
            if (response.status === 400) {
                _this.alert.error("Error", "Username doesn't exist or the password is wrong");
            }
        });
    };
    //------------------------------------------------
    LoginComponent.prototype._resetLoginForm = function () {
        this.loginModel.username = "";
        this.loginModel.password = "";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recent-posts{\r\n    margin-top: 10px;\r\n    margin-bottom: 30px;\r\n    color: #9c9c9c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"recent-posts\">\r\n    <h3>Recent Posts</h3>\r\n  </div>\r\n\r\n  <!-- LOOP TROUGH POSTS-->\r\n  <div *ngIf=\"posts\">\r\n    <div *ngFor=\"let post of posts\">\r\n      <post-component [post]=\"post\"></post-component>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(_postService) {
        this._postService = _postService;
        this.posts = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    //------------------------------------------------
    // GET POSTS
    MainComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService.getPosts()
            .then(function (posts) {
            _this.posts = posts;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" aria-controls=\"navbarsExampleDefault\" (click)=\"showMenu()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">FacePost</a>\r\n\r\n  <div class=\"collapse navbar-collapse\" [class.show]=\"menuIsVisible\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" *ngIf=\"loggedInUser\">\r\n            <i class=\"fa fa-home\" data-target=\".navbar-collapse\" aria-hidden=\"true\">\r\n                    </i>Home <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"collapseMenu()\">\r\n        <a class=\"nav-link\" routerLink=\"/create-post\" data-target=\".navbar-collapse\" *ngIf=\"loggedInUser\">\r\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Create Post\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"collapseMenu()\">\r\n        <a class=\"nav-link\" routerLink=\"/user/me\" *ngIf=\"loggedInUser\">\r\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n          Profile <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <!--<li class=\"nav-item\" (click)=\"collapseMenu()\">\r\n        <a class=\"nav-link\" routerLink=\"/friends\" *ngIf=\"loggedInUser\">\r\n          <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\r\n          Friends <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>-->\r\n      <li class=\"nav-item\" (click)=\"collapseMenu()\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!loggedInUser\">\r\n          Login\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"collapseMenu()\">\r\n        <a class=\"nav-link\" routerLink=\"/register\" *ngIf=\"!loggedInUser\">\r\n          Register\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\" (click)=\"collapseMenu()\" (click)=\"logout()\" *ngIf=\"loggedInUser\">\r\n        <a class=\"nav-link\">\r\n          <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(_authService) {
        this._authService = _authService;
        this.loggedInUser = this._authService.isAuthenticated();
    }
    NavigationComponent.prototype.logout = function () {
        this._authService.logout();
        this.collapseMenu();
        location.reload();
    };
    NavigationComponent.prototype.collapseMenu = function () {
        this.menuIsVisible = false;
    };
    NavigationComponent.prototype.showMenu = function () {
        this.menuIsVisible = !this.menuIsVisible;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_alert_service_service__["a" /* AlertService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-found{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n    padding: 100px 30px;\r\n    background: rgba(128, 128, 128, 0.050980392156862744);\r\n    color: rgba(128, 128, 128, 0.7098039215686275);\r\n}\r\n\r\n.error-404{\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    color: rgba(66, 103, 178, 0.7686274509803922);\r\n    margin-right: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <hr>\r\n  <div class=\"not-found\">\r\n    <span class=\"error-404\">404</span>\r\n    <h2> REQUESTED PAGE IS NOT FOUND</h2>\r\n  </div>\r\n  <hr>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-author{\r\n    color: rgba(128, 128, 128, 0.7);\r\n}\r\n\r\n.post-title{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.post-author-name{\r\n    cursor: pointer;\r\n}\r\n\r\n.post-author-name:hover{\r\n    color: #2196F3;\r\n}\r\n\r\n.post-posted-on{\r\n    font-weight: 200;\r\n    color: black;\r\n}\r\n\r\n.post-date{\r\n    font-weight: 200;\r\n    color: #2196F3;\r\n}\r\n\r\n/* COMMENTS RELATED */\r\n\r\n\r\n.comments-read{\r\n    color: rgba(33, 150, 243, 0.8);\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    text-decoration: underline;\r\n}\r\n\r\n.comment-write{\r\n    color: rgba(33, 150, 243, 0.8);\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.comments-amount{\r\n    background-color: rgba(5, 115, 203, 0.9686274509803922) !important;\r\n}\r\n\r\n.comments-container{\r\n    background: rgba(128, 128, 128, 0.0784313725490196);\r\n    border-top: 2px solid rgba(128, 128, 128, 0.23137254901960785);\r\n    margin-top: 10px;\r\n    padding: 15px;\r\n}\r\n\r\n.comment-author{\r\n    font-weight: 500;\r\n}\r\n\r\n.comment-date{\r\n    color: rgba(7, 118, 206, 0.83);\r\n    font-size: 13px\r\n}\r\n\r\n.comment{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.comment-content{\r\n    font-size: 15px;\r\n}\r\n\r\n.comment-submit{\r\n    cursor: pointer;\r\n    background: rgba(5, 115, 203, 0.9686274509803922);\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card post\">\r\n\r\n  <!-- POST BODY-->\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title post-title\">{{post.title}}</h4>\r\n    <h6 class=\"card-subtitle mb-2 post-author\">\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i> by \r\n      <span class=\"post-author-name\" (click)=\"goToUserProfile()\">\r\n          {{post.username}}\r\n      </span>\r\n      <span class=\"post-posted-on\">posted on </span>\r\n      <span class=\"post-date\">{{post.createdAt | date:'medium' }}</span>\r\n    </h6>\r\n    <p class=\"card-text\">{{post.content}}</p>\r\n\r\n    <!-- POST COMMENTS SECTION-->\r\n    <!-- Read Comments -->\r\n    <div class=\"comments-read\" (click)=\"showComments()\">\r\n      {{commentsVisible ? 'Hide Comments' : 'Read Comments'}}\r\n    </div>\r\n\r\n    <div class=\"comments-container\" *ngIf=\"commentsVisible\">\r\n\r\n      <!-- POST COMMENTS START-->\r\n      <div class=\"comments\">\r\n\r\n        <div class=\"comment\" *ngFor=\"let comment of comments\">\r\n          <div>\r\n            <span class=\"comment-author\">{{comment.username}}:</span>\r\n            <span class=\"comment-content\">{{comment.content}} </span>\r\n          </div>\r\n          <span class=\"comment-date\">{{comment.createdAt | date:'medium'}}</span>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- POST COMMENTS END-->\r\n\r\n      <!-- CREATE A COMMENT -->\r\n      <div class=\"comment-write\">\r\n        <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i> Write a comment\r\n      </div>\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" \r\n               class=\"form-control\" \r\n               placeholder=\"Write a comment here....\" \r\n               aria-describedby=\"basic-addon2\"\r\n               [(ngModel)]=\"newComment\">\r\n        <span class=\"input-group-addon comment-submit\" \r\n              id=\"basic-addon2\" (click)=\"submitComment()\"> \r\n          <i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- POST COMMENTS END-->\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_postModel__ = __webpack_require__("../../../../../src/app/models/postModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_commentModel__ = __webpack_require__("../../../../../src/app/models/commentModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostComponent = (function () {
    function PostComponent(_commentService, _alert, _router) {
        this._commentService = _commentService;
        this._alert = _alert;
        this._router = _router;
        this.comments = [];
        this.newComment = "";
    }
    //----------------------------------------------------------------------------
    PostComponent.prototype.submitComment = function () {
        var _this = this;
        // SANITIZE COMMENT ?
        var sanitizedComment = this._sanitize(this.newComment);
        // SUBMIT COMMENT
        this._commentService.saveComment(sanitizedComment, this.post.id)
            .then(function (commetResponse) {
            // Feedback for the user
            _this._alert.success("Success", "Comment successfully created!");
            // Create and render comment
            var newComment = _this._mapResponseToComment(commetResponse);
            _this.comments.push(newComment);
            // Reset the form
            _this.newComment = "";
        });
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype.showComments = function () {
        this.commentsVisible = !this.commentsVisible;
        //Get Comments for the post PROD
        this._getCommentsForPost();
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype.goToUserProfile = function () {
        this._router.navigate(["/user/" + this.post.user_id]);
    };
    //============================================================================
    // Private Function
    PostComponent.prototype._getCommentsForPost = function () {
        var _this = this;
        this._commentService.getComments(this.post.id)
            .then(function (comments) {
            _this.comments = comments;
        });
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype._mapResponseToComment = function (comment) {
        var newComment = new __WEBPACK_IMPORTED_MODULE_5__models_commentModel__["a" /* Comment */]();
        newComment.id = comment.id;
        newComment.username = comment.username;
        newComment.content = comment.content;
        newComment.createdAt = comment.createdAt;
        return newComment;
    };
    //----------------------------------------------------------------------------
    PostComponent.prototype._sanitize = function (dataToSanitize) {
        return dataToSanitize;
    };
    return PostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_postModel__["a" /* Post */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_postModel__["a" /* Post */]) === "function" && _a || Object)
], PostComponent.prototype, "post", void 0);
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'post-component',
        template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post/post.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/private-component/private-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 style=\"color:red;\">THIS IS PRIVATE AREA OF THE WEBSITE</h3>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/private-component/private-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivateComponent = (function () {
    function PrivateComponent() {
    }
    return PrivateComponent;
}());
PrivateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-private-component',
        template: __webpack_require__("../../../../../src/app/components/private-component/private-component.component.html")
    })
], PrivateComponent);

//# sourceMappingURL=private-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Create an Account</h3>\r\n  <br>\r\n  \r\n\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <!-- USERNAME -->\r\n    <div class=\"form-group row\">\r\n      <label for=\"email\" class=\"col-sm-2 col-form-label\">Username</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"username\" class=\"form-control\" [class.valid-field]=\"isValidField('username')\" id=\"username\" placeholder=\"Username\"\r\n          formControlName=\"username\">\r\n      </div>\r\n      <!-- IF USERNAME ERRORS-->\r\n      <div *ngIf=\"username.errors && username.dirty && username.touched\" class=\"form-group row\">\r\n        <label *ngIf=\"username.errors.required\" for=\"username\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Username is required\r\n      </label>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!-- EMAIL -->\r\n    <!--<div class=\"form-group row\">\r\n      <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"email\" class=\"form-control\" [class.valid-field]=\"isValidField('email')\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n      </div>\r\n    </div>-->\r\n    <!-- IF EMAIL ERRORS-->\r\n    <!--<div *ngIf=\"email.errors && email.dirty && email.touched\" class=\"form-group row\">\r\n      <label *ngIf=\"email.errors.email\" for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Wrong Email Format\r\n      </label>\r\n\r\n      <label *ngIf=\"email.errors.required\" for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Email is Required\r\n      </label>\r\n    </div>-->\r\n\r\n    <!-- PASSWORD -->\r\n    <div class=\"form-group row\">\r\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Password</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"password\" class=\"form-control\" [class.valid-field]=\"isValidField('password1')\" id=\"password1\" placeholder=\"Password\"\r\n          formControlName=\"password1\">\r\n      </div>\r\n    </div>\r\n    <!-- IF PASSWORD ERROR -->\r\n    <div *ngIf=\"password1.errors && (password1.dirty && password1.touched)\" class=\"form-group row\">\r\n\r\n      <!-- if password is too short-->\r\n      <label *ngIf=\"password1.errors.minlength\" for=\"password1\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password is too short. Minimum length is 6 characters\r\n      </label>\r\n\r\n      <!-- if password requires number-->\r\n      <label *ngIf=\"password1.errors.needsNumber\" for=\"password1\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password requires at least one NUMBER\r\n      </label>\r\n\r\n      <!-- if password requires UpperCase-->\r\n      <label *ngIf=\"password1.errors.needsUppercase\" for=\"password1\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password requires at least one character in UpperCase\r\n      </label>\r\n\r\n    </div>\r\n\r\n    <!-- REPEAT PASSWORD -->\r\n    <div class=\"form-group row\">\r\n      <label for=\"password\" class=\"col-sm-2 col-form-label\">Repeat Password</label>\r\n      <div class=\"col-sm-6\">\r\n        <input type=\"password\" class=\"form-control\" [class.valid-field]=\"isValidField('password2')\" id=\"password2\" placeholder=\"Repeat Password\"\r\n          formControlName=\"password2\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- IF PASSWORD2 ERROR -->\r\n    <div *ngIf=\"password2.errors && (password2.dirty && password2.touched)\">\r\n\r\n      <!-- if password is too short-->\r\n      <label *ngIf=\"password2.errors.minlength\" for=\"password2\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password is too short. Minimum length is 6 characters\r\n      </label>\r\n\r\n      <!-- if password requires number-->\r\n      <label *ngIf=\"password2.errors.needsNumber\" for=\"password2\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password requires at least one NUMBER\r\n      </label>\r\n\r\n      <!-- if password requires UpperCase-->\r\n      <label *ngIf=\"password2.errors.needsUppercase\" for=\"password2\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Password requires at least one character in UpperCase\r\n      </label>\r\n      \r\n    </div>\r\n\r\n\r\n    <!-- IF PASSWORDS DONT MATCH-->\r\n    <div *ngIf=\"!areMatchingPasswords() && \r\n                (password1.dirty && password1.touched) &&\r\n                (password2.dirty && password2.touched)\" class=\"form-group row\">\r\n      <label for=\"email\" class=\"col-sm-8 col-form-label form-error-message\">\r\n        Passwords dont match\r\n      </label>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <div class=\"offset-sm-2 col-sm-6\">\r\n        <button class=\"btn btn-success\" [class.btn-disabled]=\"!isValidForm()\" [disabled]=\"!isValidForm()\">\r\n                    Register\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_service__ = __webpack_require__("../../../../../src/app/services/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(_auth, _alert, _validator, _formBuilder, _router) {
        this._auth = _auth;
        this._alert = _alert;
        this._validator = _validator;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.createForm();
    }
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        var testUser = this._makeUser();
        this._auth.register(testUser)
            .then(function (response) {
            _this.registerForm.reset();
            _this._alert.success("Hallo 😘", "Successful registration.");
            setTimeout(function () {
                _this._router.navigate(['/home']);
                location.reload();
            }, 1500);
        })
            .catch(function (err) {
            _this._alert.error("Register Error", err.message);
        });
    };
    // ===========================================================================
    // FUNCTIONS  
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this._formBuilder.group({
            username: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)])
            ],
            password1: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    this._validator.inputHasNumber,
                    this._validator.inputHasUpperCase
                ])
            ],
            password2: [
                '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6),
                    this._validator.inputHasNumber,
                    this._validator.inputHasUpperCase
                ])
            ]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        // ---------------------------------------------------------------------------
        // FROM GETTERS
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password1", {
        get: function () { return this.registerForm.get('password1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password2", {
        get: function () { return this.registerForm.get('password2'); },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.isValidField = function (fieldName) {
        return this.registerForm.get(fieldName).status == 'VALID';
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.isValidForm = function () {
        var isValidForm = this.registerForm.status == 'VALID';
        var passwordsMatch = this.areMatchingPasswords();
        return isValidForm && passwordsMatch;
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype.areMatchingPasswords = function () {
        return this.registerForm.get('password1').value === this.registerForm.get('password2').value;
    };
    // ---------------------------------------------------------------------------
    RegisterComponent.prototype._makeUser = function () {
        return {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password1
        };
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validation_service__["a" /* ValidationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/testerium/testerium.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item{\r\n    background: #03a9f475;\r\n    border: 1px solid grey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/testerium/testerium.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-if=\"showFlex\">\n  <div class=\"container\">\n    <h1>TESTERIUM</h1>\n  </div>\n\n  <div class=\"container\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n    <div class=\"item item-1\" fxFlex>Item 1</div>\n    <div class=\"item item-3\" fxFlex>Item 2</div>\n    <div class=\"item item-2\" fxFlex=\"300px\">Item 3</div>\n  </div>\n\n  <br>\n  <br>\n\n  <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n    <div class=\"item item-4\" fxFlex=\"30%\">Item 4</div>\n    <div class=\"item item-5\" fxFlex>Item 5</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/testerium/testerium.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesteriumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TesteriumComponent = (function () {
    function TesteriumComponent() {
        this.showFlex = false;
    }
    TesteriumComponent.prototype.ngOnInit = function () {
    };
    return TesteriumComponent;
}());
TesteriumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-testerium',
        template: __webpack_require__("../../../../../src/app/components/testerium/testerium.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/testerium/testerium.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TesteriumComponent);

//# sourceMappingURL=testerium.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.profile-holder{\r\n    background: rgba(128, 128, 128, 0.01);\r\n    border-bottom: 2px solid rgba(128, 128, 128, 0.25);\r\n    box-shadow: 0px 1px 10px -2px rgba(158, 158, 158, 0.54);\r\n    margin-top: -25px;\r\n    margin-bottom: 20px;\r\n    padding-top: 23px;\r\n    position: relative;\r\n}\r\n\r\n.profile-info{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: rgb(158, 158, 158);\r\n}\r\n\r\n.profile-settings{\r\n    position: absolute;\r\n    top: 25px;\r\n    right: 25px;\r\n    font-size: 20px;\r\n    color: #2196F3;\r\n    cursor: pointer;\r\n}\r\n\r\n.profile-menu{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin-top: 30px;\r\n}\r\n\r\n.profile-menu-item{\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.blue{\r\n    color: rgb(3, 169, 244);\r\n}\r\n.green{\r\n    color: rgba(139, 195, 74, 0.83);\r\n}\r\n.orange{\r\n    color: hsl(36, 100%, 50%);\r\n}\r\n\r\n.right-border{\r\n    border-right: 1px solid grey;\r\n    padding-right: 10px;\r\n}\r\n\r\n.user-image{\r\n    border-radius: 5px;\r\n    border: 1px solid grey;\r\n    box-shadow: 2px 2px 6px 0px #9E9E9E;\r\n    height: 200px;\r\n    width: 200px;\r\n    padding: 6px;\r\n}\r\n\r\n.user-posts-holder{\r\n    margin-top: 25px;\r\n}\r\n\r\n.posts-by{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n    margin-bottom: 20px;\r\n    color: rgb(158, 158, 158);\r\n}\r\n\r\n.posts-by span{\r\n    margin-right: 7px;\r\n    font-size: 17px;\r\n}\r\n\r\n.posts-friends-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.user-posts{\r\n    width: 75%;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\n.user-friends-list{\r\n    width: 25%;\r\n    /*background: rgba(29, 242, 228, 0.42);*/\r\n    margin-left: 20px;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n    height: 100%;\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.friends-status{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n    font-size: 17px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.online{\r\n    color: green;\r\n}\r\n\r\n.offline{\r\n    color: red;\r\n}\r\n\r\n.online-icon{\r\n   margin-top: 10px;\r\n   color: green;\r\n   margin-left: 5px;\r\n}\r\n\r\n.offline-icon{\r\n   margin-top: 10px;\r\n   color: red;\r\n   margin-left: 5px;\r\n}\r\n\r\n.friend-item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 20px;\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n\r\n.friend-icon{\r\n    border-radius: 50%;\r\n    max-width: 42px;\r\n}\r\n\r\n.friend-username{\r\n    margin-left: 10px;\r\n}\r\n\r\n.user-avatar{\r\n    position: relative;\r\n}\r\n\r\n.image-upload-icon{\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 16px;\r\n    color: rgb(158, 158, 158);\r\n    border: 1px solid rgb(158, 158, 158);\r\n    font-size: 20px;\r\n    padding: 4px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    background: rgba(255, 255, 255, 0.7803921568627451);\r\n}\r\n\r\n.image-upload-icon:hover{\r\n    color: rgb(3, 169, 244);\r\n    border: 1px solid #03A9F4;\r\n    background: rgb(255, 255, 255);\r\n}\r\n\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.user-settings{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 100px;\r\n    background: rgba(204, 204, 204, 0.14);\r\n    border-top: 1px solid rgba(204, 204, 204, 0.29);\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.user-setting-item{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n}\r\n\r\n.user-settins-selector select{\r\n    display: block;\r\n    margin-left: 10px;\r\n    padding: .5rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    color: #464a4c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-radius: .25rem;\r\n}\r\n\r\n@media (max-width: 992px){\r\n    .user-friends-list{\r\n        display: none;\r\n    }\r\n    .user-posts{\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-holder\">\r\n  <div class=\"container profile-info\">\r\n    <h3 *ngIf=\"username\">\r\n      <span>{{username}}</span>\r\n    </h3>\r\n\r\n    <div class=\"user-avatar\">\r\n      <img class=\"img-responsive user-image\" [src]=\"user_avatar\">\r\n      <input type=\"file\" name=\"file\" id=\"imageUpload\" class=\"inputfile\" \r\n             accept=\"image/x-png,image/gif,image/jpeg\" \r\n             (change)=\"pictureUpload($event)\"/>\r\n      <label for=\"imageUpload\" *ngIf=\"isMe\">\r\n        <i class=\"fa fa-cloud-upload image-upload-icon\" aria-hidden=\"true\"></i>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"profile-menu\">\r\n      <div class=\"profile-menu-item\" *ngIf=\"isMe\">\r\n        <span (click)=\"showUserSettings()\">\r\n          <i class=\"fa fa-cog\" aria-hidden=\"true\"></i> {{ showSettings? 'Hide Settings': 'Settings' }}\r\n        </span>\r\n      </div>\r\n      <!--<div class=\"profile-menu-item\">\r\n        <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Friends\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"user-settings\" *ngIf=\"isMe && showSettings\">\r\n\r\n    <!-- SETTING ITEM START  ================================================-->\r\n    <div class=\"user-setting-item\">\r\n      <label for=\"exampleFormControlSelect1\">\r\n        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Privacy\r\n      </label>\r\n\r\n      <div class=\"user-settins-selector\">\r\n        <select id=\"exampleFormControlSelect1\" [(ngModel)]=\"user_picture_preferences\">\r\n          <option *ngFor=\"let s of possiblePreferences\" \r\n                  [ngValue]=\"s\">\r\n            {{s.name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!-- SETTING ITEM END  ==================================================-->\r\n\r\n\r\n    <!-- UPDATE SETTING BUTTTON ==============================================-->\r\n    <div class=\"mt20\">\r\n      <button class=\"btn btn-success btn-sm\" (click)=\"updateUserSettings()\">\r\n        <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i> Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- POSTS -->\r\n<div class=\"container user-posts-holder\" *ngIf=\"user_posts\">\r\n\r\n  <div class=\"posts-by\">\r\n    <span>Posts by</span>\r\n    <h4>{{username}}</h4>\r\n  </div>\r\n\r\n  <div class=\"posts-friends-container\">\r\n\r\n    <!--POSTS-->\r\n    <!--The below line should be used when friends list functionality is used-->\r\n    <!--<div class=\"user-posts\" [class.full-width]=\"!isMe\">-->\r\n    <div class=\"user-posts full-width\">\r\n      <post-component [post]=\"post\" *ngFor=\"let post of user_posts\"></post-component>\r\n    </div>\r\n\r\n    <!--=====================================================================-->\r\n    <!-- FRIENDS LIST START-->\r\n    <!--@TODO: make it as a separate friends-list component? -->\r\n    <!--\r\n    <div class=\"user-friends-list\" *ngIf=\"isMe\">\r\n      <div *ngFor=\"let friend of user_friends\">\r\n            <p>{{friend.name}}</p>\r\n        </div>\r\n    \r\n      <div>\r\n        <span class=\"friends-status online\">\r\n            Online \r\n            <i class=\"fa fa-circle online-icon\" aria-hidden=\"true\"></i>\r\n          </span>\r\n        <div class=\"friend-item\" (click)=\"goToFriendProfle('Deniz1')\">\r\n          <img src=\"http://via.placeholder.com/50x50\" alt=\"\" class=\"friend-icon\">\r\n          <span class=\"friend-username\">User x</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n        <span class=\"friends-status offline mt20\">\r\n              Offline\r\n              <i class=\"fa fa-circle offline-icon\" aria-hidden=\"true\"></i>\r\n          </span>\r\n        <div class=\"friend-item\" (click)=\"goToFriendProfle('Deniz7')\">\r\n          <img src=\"http://via.placeholder.com/50x50\" alt=\"\" class=\"friend-icon\">\r\n          <span class=\"friend-username\">User x</span>\r\n        </div>\r\n      </div>\r\n    </div> \r\n    -->\r\n    <!-- FRIENDS LIST END-->\r\n    <!--=====================================================================-->\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(_route, _router, _postService, _accountService, _alert) {
        this._route = _route;
        this._router = _router;
        this._postService = _postService;
        this._accountService = _accountService;
        this._alert = _alert;
        /*
          1.0 MB (1024 Kilobyte) = 1048576
          0.5 MB (512 Kilobyte)  = 524288
        */
        this.AVATAR_MAX_SIZE = 1048576;
        this.possiblePreferences = this._getPossiblePreferences();
        this.user_picture_preferences;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_avatar = "assets/images/user-default.png";
        // GET USER NAME FROM URL PARAMS
        this._route.params
            .map(function (params) { return params['user_id']; })
            .subscribe(function (user_id_url_param) {
            // IF Invalid user_id format, stop & show error
            if (!_this._isValidUserIdFormat(user_id_url_param)) {
                _this._alert.error("User Doesn't Exist ", "\uD83D\uDC7BThere is no user '" + user_id_url_param + "'");
                _this._resetComponentValuesToDefaul();
                return;
            }
            _this.user_id = user_id_url_param;
            _this.isMe = user_id_url_param === 'me';
            _this._loadUserData();
        });
    };
    //----------------------------------------------------------------------------
    // goToFriendProfle(username: string) {
    //   this._router.navigate([`user/${username}`]);
    // }
    //----------------------------------------------------------------------------
    UserComponent.prototype.updateUserSettings = function () {
        var _this = this;
        /*
        *!MPROTANT*
        @TODO:
          make setings update dinamyc.
          NOW it is hardcoded and assumes that we have only Picture preferences
      */
        // SETTING preference type to Picture
        this.user_picture_preferences.type_id = 1;
        this._accountService.updateUserPreferences(this.user_picture_preferences)
            .then(function (response) {
            _this._alert.success("Success", "Settings are updated! \n👨‍💻");
            _this.showSettings = false;
        })
            .catch(function (err) {
            _this._alert.error("💩 happens....", "Unfortunately you settings are not updated! \nPlease try again!");
            _this.showSettings = false;
        });
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype.pictureUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var fileInfo = event.target.files[0];
            // CHECK IMAGE SIZE
            if (fileInfo.size > this.AVATAR_MAX_SIZE) {
                this._alert.error("ATTENTION !", "THE SELECTED IMAGE IS TOOOO BIG....\nMAX ALLOWED SIZE IS 1 MB!");
                return;
            }
            // CHECK FILE TYPE
            if (!fileInfo.type.includes('image')) {
                this._alert.error("NOT AN IMAGE!", "Ai ai ai.....");
                return;
            }
            reader.onload = function (event) {
                var imageAsBase64 = event.target.result;
                // IF NOT IMAGE => RETURN && DO NOT UPLOAD
                if (!_this._checkIfImage(imageAsBase64)) {
                    return;
                }
                ;
                // IMAGE UPLOAD
                _this._accountService.uploadProfilePicture(imageAsBase64)
                    .then(function () {
                    _this.user_avatar = imageAsBase64;
                    _this._alert.alertWithImage("Success", "Wow your avatar looks great! \nThe Picture is successfully saved!", imageAsBase64);
                })
                    .catch(function (err) {
                    _this._alert.error("What a sad, sad day 😢", "Unfortunately you picture is not saved! \nPlease try again!");
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype.showUserSettings = function () {
        this.showSettings = !this.showSettings;
    };
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTION ----------------------------------------------------------
    //----------------------------------------------------------------------------
    UserComponent.prototype._loadUserData = function () {
        if (this.isMe) {
            console.log('LOADING MY DATA !');
            this.username = "Me";
            this._getMyPicture();
            this._getMyPosts();
            this._getMyPreferences();
            this._getPreferenceTypes();
        }
        else {
            // GET USER PICTURE
            this._getUserPicture(this.user_id);
            // GET USER POSTS
            this._getUserPosts(this.user_id);
        }
    };
    //============================================================================
    // [ GET MY DATA START ]
    //----------------------------------------------------------------------------
    // GET MY PICTURE
    UserComponent.prototype._getMyPicture = function () {
        var _this = this;
        this._accountService.getMyPicture()
            .then(function (response) {
            var myPicture = response[0].picture;
            var isBase64Image = myPicture.includes("data:image") && myPicture.includes("base64");
            if (myPicture != null && isBase64Image) {
                _this.user_avatar = myPicture;
            }
        });
    };
    //----------------------------------------------------------------------------
    // GET MY POSTS
    UserComponent.prototype._getMyPosts = function () {
        var _this = this;
        this._postService.getMyPosts()
            .then(function (postResponse) {
            _this.user_posts = postResponse;
        });
    };
    //----------------------------------------------------------------------------
    // GET MY PREFERENCES
    /*
      *!MPROTANT*
      @TODO:
        for now we assume that we have only one preference - see picture
        that is why I'm taking [0] element from array with preferences
        later when we will have more preferences
        we need to loop through them and display on the UI
    */
    UserComponent.prototype._getMyPreferences = function () {
        var _this = this;
        this._accountService.getMyPreferences()
            .then(function (preferenceResponse) {
            console.log('preferenceResponse');
            console.log(preferenceResponse);
            var picture_preference = _this._getUserPicturePreference(preferenceResponse[0]);
            _this.user_picture_preferences = picture_preference;
        });
    };
    //----------------------------------------------------------------------------
    // GET PREFERENCE TYPES
    UserComponent.prototype._getPreferenceTypes = function () {
        this._accountService.getPreferenceTypes()
            .then(function (PreferenceTypes) {
            console.log('PreferenceTypes');
            console.log(PreferenceTypes);
        });
    };
    // [ GET MY DATA END ]
    //============================================================================
    //============================================================================
    // [ GET USER DATA START ]
    //----------------------------------------------------------------------------
    UserComponent.prototype._getUserPosts = function (user_id) {
        var _this = this;
        this._postService.getUserPosts(user_id)
            .then(function (postResponse) {
            _this.user_posts = postResponse;
            // update displayed username
            _this.username = postResponse[0].username;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype._getUserPicture = function (user_id) {
        var _this = this;
        this._accountService.getUserPicture(user_id)
            .then(function (response) {
            var userPicture = response[0].picture;
            if (userPicture != null) {
                _this.user_avatar = userPicture;
            }
        });
    };
    // [ GET USER DATA START ]
    //============================================================================
    //----------------------------------------------------------------------------
    UserComponent.prototype._checkIfImage = function (imageAsBase64) {
        return imageAsBase64.includes("data:image");
    };
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    UserComponent.prototype._getPossiblePreferences = function () {
        return [{
                level_id: 1,
                name: "Public",
            },
            {
                level_id: 2,
                name: "Friends Only"
            },
            {
                level_id: 3,
                name: "Private"
            }
        ];
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype._getUserPicturePreference = function (picturePreference) {
        var preferenceIndex = parseInt(picturePreference.level_id) - 1;
        return this.possiblePreferences[(preferenceIndex)];
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype._isValidUserIdFormat = function (user_id) {
        return !isNaN(user_id) || user_id.toLowerCase() == 'me';
    };
    //----------------------------------------------------------------------------
    UserComponent.prototype._resetComponentValuesToDefaul = function () {
        this.user_avatar = "assets/images/user-default.png";
        this.username = "";
        this.isMe = false;
        this.showSettings = false;
        this.user_posts = undefined;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_account_service__["a" /* AccountService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service_service__["a" /* AlertService */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/commentModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=commentModel.js.map

/***/ }),

/***/ "../../../../../src/app/models/loginModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=loginModel.js.map

/***/ }),

/***/ "../../../../../src/app/models/postModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=postModel.js.map

/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AccountService = (function () {
    function AccountService(_http, _requestService) {
        this._http = _http;
        this._requestService = _requestService;
    }
    //----------------------------------------------------------------------------
    // GET MY PREFERENCES
    AccountService.prototype.getMyPreferences = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiAccountPreferencesUrl, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (preferences) { return preferences.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET PREFERENCE TYPES
    AccountService.prototype.getPreferenceTypes = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiAccountPreferenceTypesUrl, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (preferenceTypes) { return preferenceTypes.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // UPDATE USER PICTURE
    AccountService.prototype.uploadProfilePicture = function (base64picture) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiPictureUrl, this._makePicturePayload(base64picture), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) {
            if (response.status === 200) {
                return Promise.resolve();
            }
        })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // UPDATE USER PREFERENCES
    AccountService.prototype.updateUserPreferences = function (preference) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiAccountPreferencesUrl, this._makePreferencesPayload(preference), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) {
            if (response.status === 200) {
                return Promise.resolve();
            }
        })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET MY PICTURE
    AccountService.prototype.getMyPicture = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiPictureUrl, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET USER PICTURE
    AccountService.prototype.getUserPicture = function (user_id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* Config */].apiPictureUrl + "?user_id=" + user_id, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTIONS ----------------------------------------------------------
    //----------------------------------------------------------------------------
    AccountService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    //----------------------------------------------------------------------------
    AccountService.prototype._makePicturePayload = function (base64picture) {
        return JSON.stringify({
            picture: base64picture
        });
    };
    //----------------------------------------------------------------------------
    AccountService.prototype._makePreferencesPayload = function (preferences) {
        return JSON.stringify({
            type_id: preferences.type_id,
            level_id: preferences.level_id,
        });
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], AccountService);

var _a, _b;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertService = (function () {
    function AlertService() {
    }
    //------------------------------------------------------------------
    AlertService.prototype.success = function (title, message) {
        swal(title, message, 'success');
    };
    //------------------------------------------------------------------
    AlertService.prototype.error = function (title, message) {
        swal(title, message, 'error');
    };
    //------------------------------------------------------------------
    AlertService.prototype.info = function (title) {
        swal(title);
    };
    //------------------------------------------------------------------
    AlertService.prototype.alertWithImage = function (title, message, image) {
        swal({
            title: 'Sweet Success!',
            text: 'Wow your avatar looks great! \nThe Picture is successfully saved!',
            imageUrl: image,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Your new amazing Profile Picture',
            animation: false
        });
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], AlertService);

//# sourceMappingURL=alert-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service_service__ = __webpack_require__("../../../../../src/app/services/alert-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, authService, alert) {
        this.router = router;
        this.authService = authService;
        this.alert = alert;
    }
    //----------------------------------------------------------------------------
    AuthGuard.prototype.canActivate = function () {
        return this.authenticationCheck();
    };
    //----------------------------------------------------------------------------
    AuthGuard.prototype.authenticationCheck = function () {
        var _this = this;
        var isAthenticated = this.authService.isAuthenticated();
        if (!isAthenticated) {
            this.alert.error("Not Authorized", "Please login in order to access requested resource");
            setTimeout(function () {
                _this.router.navigate(['/login']);
            }, 1500);
            return false;
        }
        return isAthenticated;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__alert_service_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_service_service__["a" /* AlertService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthService = (function () {
    function AuthService(router, _http) {
        this.router = router;
        this._http = _http;
    }
    // LOGIN
    //-----------------------------------------------------------
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var dataPayload = JSON.stringify({
            username: credentials.username,
            password: credentials.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http
            .post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].apiLoginUrl, dataPayload, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setToken(data);
            _this.router.navigate(['/home']);
        })
            .catch(this.handleError);
    };
    //-----------------------------------------------------------
    AuthService.prototype.register = function (userData) {
        var _this = this;
        var dataPayload = JSON.stringify({
            username: userData.username,
            password: userData.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this._http
            .post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* Config */].apiRegisterUrl, dataPayload, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setToken(data);
            return data;
        })
            .catch(this.handleError);
    };
    //-----------------------------------------------------------
    AuthService.prototype.isAuthenticated = function () {
        return this.validateToken();
    };
    //-----------------------------------------------------------
    AuthService.prototype.validateToken = function () {
        var token = this.getToken();
        if (token.token === null || token.tta === null) {
            return false;
        }
        // check if token.token = has value
        var isValidToken = (token.token.length == 128 || token.token.length == 127);
        //check if token.tta still valid
        var isValidTta = this.checkTokenTTA(token.tta);
        return isValidToken && isValidTta;
    };
    //-----------------------------------------------------------
    AuthService.prototype.getToken = function () {
        return {
            token: localStorage.getItem("token"),
            tta: localStorage.getItem("tta"),
        };
    };
    //------------------------------------------------------------------
    AuthService.prototype.setToken = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('tta', data.timeAlive);
    };
    //------------------------------------------------------------------
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('tta');
        this.router.navigate(['/login']);
    };
    //------------------------------------------------------------------
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    //------------------------------------------------------------------
    AuthService.prototype.checkTokenTTA = function (timestamp) {
        if (typeof timestamp == 'undefined') {
            return false;
        }
        var now = new Date();
        var tokenExpiration = new Date(timestamp);
        // TTA should be bigger(later) than 'now' 
        return now < tokenExpiration;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CommentsService = (function () {
    function CommentsService(_http, _requestService) {
        this._http = _http;
        this._requestService = _requestService;
    }
    //----------------------------------------------------------------------------
    // GET COMMENTS
    CommentsService.prototype.getComments = function (post_id) {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiCommentsUrl + "?post_id=" + post_id, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (comments) { return comments.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // POST COMMENT
    CommentsService.prototype.saveComment = function (newComment, post_id) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiCommentsUrl, this.makeCommentPayload(newComment, post_id), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (data) { return data; })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTION ----------------------------------------------------------
    //----------------------------------------------------------------------------
    CommentsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    //----------------------------------------------------------------------------
    CommentsService.prototype.makeCommentPayload = function (newComment, post_id) {
        return JSON.stringify({
            content: newComment,
            post_id: post_id
        });
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], CommentsService);

var _a, _b;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PostsService = (function () {
    function PostsService(_http, _requestService) {
        this._http = _http;
        this._requestService = _requestService;
    }
    //----------------------------------------------------------------------------
    // GET POSTS
    PostsService.prototype.getPosts = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiPostsUrl + "?recent=true", this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (posts) { return posts.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET MY POSTS
    PostsService.prototype.getMyPosts = function () {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiPostsUrl, this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (posts) { return posts.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // GET MY POSTS
    PostsService.prototype.getUserPosts = function (user_id) {
        return this._http
            .get(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiUserPostsUrl(user_id), this._requestService.AuthHeadersForGET())
            .toPromise()
            .then(function (posts) { return posts.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // SAVE POSTS
    PostsService.prototype.savePost = function (newPost) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* Config */].apiPostsUrl, this.makePostPayload(newPost), this._requestService.AuthHeadersForPOST())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTION ----------------------------------------------------------
    //----------------------------------------------------------------------------
    PostsService.prototype.handleError = function (error) {
        // this._aaaaa.logHttpRequestError(error);
        console.log('ERROR:');
        console.log(error);
        console.log(error.status);
        return Promise.reject(error.message || error);
    };
    //----------------------------------------------------------------------------
    PostsService.prototype.makePostPayload = function (newPost) {
        return JSON.stringify({
            title: newPost.title,
            content: newPost.content
        });
    };
    return PostsService;
}());
PostsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], PostsService);

var _a, _b;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = (function () {
    function RequestService(authService) {
        this.authService = authService;
    }
    RequestService.prototype.AuthHeadersForGET = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "Token=" + this._getToken());
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    RequestService.prototype.AuthHeadersForPOST = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', "Token=" + this._getToken());
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    //----------------------------------------------------------------------------
    // PRIVATE FUNCTIONS
    RequestService.prototype._getToken = function () {
        var tokenData = this.authService.getToken();
        return tokenData.token;
    };
    return RequestService;
}());
RequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.inputHasNumber = function (input) {
        var hasNumber = /\d/.test(input.value);
        return hasNumber ? null : { needsNumber: true };
    };
    //-------------------------------------------------------
    ValidationService.prototype.inputHasUpperCase = function (input) {
        var hasUpperCase = /[A-Z]/.test(input.value);
        return hasUpperCase ? null : { needsUppercase: true };
    };
    return ValidationService;
}());
ValidationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ValidationService);

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    mode: "Development environment",
    // apiUrl: "http://kaempe.club/WebSec"
    apiUrl: "https://localhost/WebSec"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map