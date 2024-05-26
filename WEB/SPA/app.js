var app = angular.module('csmApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngMaterial', 'jkAngularRatingStars', 'blockUI', 'angularUtils.directives.dirPagination', 'angularTrix']);

app.config(function ($routeProvider, blockUIConfig) {
    $routeProvider
        .when('/Home', {
            templateUrl: '/SPA/Home/Home.html',
            controller: 'HomeController',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
		})
		.when('/User', {
			templateUrl: '/SPA/User/User.html',
			controller: 'UserCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/UserGroup', {
			templateUrl: '/SPA/UserGroup/UserGroup.html',
			controller: 'UserGroupCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
        })
		.when('/Department', {
			templateUrl: '/SPA/Department/Department.html',
			controller: 'DepartmentCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Outlet', {
			templateUrl: '/SPA/Outlet/Outlet.html',
			controller: 'OutLetCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Item', {
			templateUrl: '/SPA/Item/Item.html',
			controller: 'ItemCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/Issues', {
			templateUrl: '/SPA/Issues/Issues.html',
			controller: 'IssuesCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Category', {
			templateUrl: '/SPA/Category/Category.html',
			controller: 'CategoryCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/BBD', {
			templateUrl: '/SPA/BBD/BBD.html',
			controller: 'BBDCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Cooler', {
			templateUrl: '/SPA/Cooler/Cooler.html',
			controller: 'CoolerCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/ShortNote', {
			templateUrl: '/SPA/ShortNote/ShortNote.html',
			controller: 'ShortNoteCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/MDO', {
			templateUrl: '/SPA/MDO/MDO.html',
			controller: 'MDOCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/AssetReport', {
			templateUrl: '/SPA/AssetConfigReports/AssetConfigReports.html',
			controller: 'AssetConfigReportsCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/Distributor', {
			templateUrl: '/SPA/Distributor/Distributor.html',
			controller: 'DistributorCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Observation', {
			templateUrl: '/SPA/Observation/Observation.html',
			controller: 'ObservationCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})

		.when('/Identity', {
			templateUrl: '/SPA/Identity/Identity.html',
			controller: 'IdentityCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})




		.when('/ItemGroup', {
			templateUrl: '/SPA/ItemGroup/ItemGroup.html',
			controller: 'ItemGroupCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/Permission', {
			templateUrl: '/SPA/Permission/Permission.html',
			controller: 'PermissionCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
        })
        .when('/ChangePassword', {
            templateUrl: '/SPA/ChangePassword/ChangePassword.html',
            controller: 'ChangePasswordCtrl',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
        })
        .when('/SchemeNumber', {
            templateUrl: '/SPA/SchemeNumber/SchemeNumber.html',
            controller: 'SchemeNumberCtrl',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
		})
		.when('/AssetConfig', {
			templateUrl: '/SPA/AssetConfig/AssetConfig.html',
			controller: 'AssetConfigCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/OutletType', {
			templateUrl: '/SPA/OutletType/OutletType.html',
			controller: 'OutletTypeCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/CommentType', {
			templateUrl: '/SPA/CommentType/CommentType.html',
			controller: 'CommentTypeCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
        }).when('/AIC', {
            templateUrl: '/SPA/AIC/AIC.html',
            controller: 'AICCtrl',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
        }).when('/ASM', {
            templateUrl: '/SPA/ASM/ASM.html',
            controller: 'ASMCtrl',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
        })
        .when('/Distributorlist', {
            templateUrl: '/SPA/Distributorlist/Distributorlist.html',
            controller: 'DistributorlistCtrl',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
        })
		.when('/Comment', {
			templateUrl: '/SPA/Comment/Comment.html',
			controller: 'CommentCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
        .when('/SurveyReports', {
			templateUrl: '/SPA/Reports/Reports.html',
			controller: 'ReportsCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
	
		.when('/QuestionnaireReports', {
			templateUrl: '/SPA/QuestionnaireReports/QuestionnaireReports.html',
			controller: 'QuestionnaireReportsCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/QuestionnaireDetailsReports', {
			templateUrl: '/SPA/QuestionnaireDetailsReports/QuestionnaireDetailsReports.html',
			controller: 'QuestionnaireDetailsReportsCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/QuestionnairePhysicalStocksReport', {
			templateUrl: '/SPA/QuestionnairePhysicalStocksReport/QuestionnairePhysicalStocksReport.html',
			controller: 'QuestionnairePhysicalStocksReportCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
		.when('/QuestionnaireObservationReports', {
			templateUrl: '/SPA/QuestionnaireObservationReports/QuestionnaireObservationReports.html',
			controller: 'QuestionnaireObservationReportsCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}QuestionnaireObservationReports
		})
		.when('/HygienePhysicalStockReport', {
			templateUrl: '/SPA/HygienePhysicalStockReport/HygienePhysicalStockReport.html',
			controller: 'HygienePhysicalStockReportCtrl',
			//resolve: {
			//    "check": function ($cookieStore) {
			//        var login = $cookieStore.get('UserData');
			//        if (angular.isUndefined(login) || login == null) {
			//            //window.location = '/Home/Login';
			//        }
			//    }
			//}
		})
        .when('/', {
            templateUrl: '/SPA/Home/Home.html',
            controller: 'HomeController',
            //resolve: {
            //    "check": function ($cookieStore) {
            //        var login = $cookieStore.get('UserData');
            //        if (angular.isUndefined(login) || login == null) {
            //            //window.location = '/Home/Login';
            //        }
            //    }
            //}
        })
        .otherwise({ redirectTo: '/' });

    blockUIConfig.template = '<div class="block-ui-overlay"></div><div class="block-ui-message-container"> <img src="../img/loading.gif" /> <h4><strong>LOADING...</strong></h4> </div>'
});