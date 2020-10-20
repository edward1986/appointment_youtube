(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['object'],
  data: function data() {
    return {
      countDownDate: new Date(this.object.date_send).getTime(),
      startDateNow: new Date(this.object.date_issue).getTime(),
      date: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0
    };
  },
  computed: {
    dateTime: function dateTime() {
      var vm = this;

      if (vm.startDateNow <= vm.$root.now && vm.countDownDate >= vm.$root.now) {
        vm.distance = vm.countDownDate - vm.$root.now;
        vm.days = Math.floor(vm.distance / (1000 * 60 * 60 * 24));
        vm.hours = Math.floor(vm.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        vm.minutes = Math.floor(vm.distance % (1000 * 60 * 60) / (1000 * 60));
        vm.seconds = Math.floor(vm.distance % (1000 * 60) / 1000);
      } else if (vm.startDateNow >= vm.$root.now && vm.countDownDate >= vm.$root.now) {
        vm.distance = vm.countDownDate - vm.$root.now;
        vm.days = Math.floor(vm.distance / (1000 * 60 * 60 * 24));
        vm.hours = Math.floor(vm.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        vm.minutes = Math.floor(vm.distance % (1000 * 60 * 60) / (1000 * 60));
        vm.seconds = Math.floor(vm.distance % (1000 * 60) / 1000);
      }

      return vm.startDateNow <= vm.$root.now && vm.countDownDate >= vm.$root.now ? {
        status: 'Starting',
        date: "".concat(vm.days, "d ").concat(vm.hours, "h ").concat(vm.minutes, "m ").concat(vm.seconds, "s")
      } : vm.startDateNow >= vm.$root.now && vm.countDownDate >= vm.$root.now ? {
        status: 'Pending',
        date: "".concat(vm.days, "d ").concat(vm.hours, "h ").concat(vm.minutes, "m ").concat(vm.seconds, "s")
      } : {
        status: 'Due Date',
        date: ""
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_appointment_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Table/appointment-grid.vue */ "./resources/js/components/Table/appointment-grid.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppointmentGrid: _Table_appointment_grid_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      appointments: []
    };
  },
  computed: {
    handleAppointment: function handleAppointment() {
      return !_.isEmpty(this.appointments);
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get("/api/appointments", {
      params: to.query
    }).then(function (response) {
      next(function (vm) {
        return vm.setData(response.data);
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;
    axios.get("/api/appointments", {
      params: to.query
    }).then(function (response) {
      vm.setData(response.data);
      next();
    });
  },
  methods: {
    setData: function setData(response) {
      this.appointments = response.data;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card",
      class:
        _vm.dateTime.status === "Starting"
          ? "border-success"
          : _vm.dateTime.status === "Pending"
          ? "border-primary"
          : "border-danger"
    },
    [
      _c("div", { staticClass: "card-header" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.object.title + " by " + _vm.object.user.name))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("p", { staticClass: "card-text" }),
        _c("div", [
          _vm._v(
            "\n        End at: " +
              _vm._s(
                "" +
                  _vm.$root
                    .moment(_vm.object.date_string)
                    .format("YYYY-MM-DD hh:mm:ss a")
              ) +
              "\n        "
          )
        ]),
        _vm._v(" "),
        _c("p")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c(
          "span",
          {
            staticClass: "badge",
            class:
              _vm.dateTime.status === "Starting"
                ? "badge-success"
                : _vm.dateTime.status === "Pending"
                ? "badge-primary"
                : "badge-danger"
          },
          [_vm._v(_vm._s(_vm.dateTime.status))]
        ),
        _vm._v(" "),
        _c("small", { staticClass: "text-muted" }, [
          _vm._v(_vm._s(_vm.dateTime.date))
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.handleAppointment
      ? _c(
          "div",
          { staticClass: "card-deck" },
          _vm._l(_vm.appointments, function(appointment) {
            return _c("appointment-grid", {
              key: appointment.id,
              attrs: { object: appointment }
            })
          }),
          1
        )
      : _c("span", [_vm._v("No Result")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Table/appointment-grid.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Table/appointment-grid.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-grid.vue?vue&type=template&id=35996300& */ "./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300&");
/* harmony import */ var _appointment_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment-grid.vue?vue&type=script&lang=js& */ "./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _appointment_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__["render"],
  _appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Table/appointment-grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./appointment-grid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/appointment-grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./appointment-grid.vue?vue&type=template&id=35996300& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/appointment-grid.vue?vue&type=template&id=35996300&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_appointment_grid_vue_vue_type_template_id_35996300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/AppointmentView.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/dashboard/AppointmentView.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppointmentView.vue?vue&type=template&id=a120e5e4& */ "./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4&");
/* harmony import */ var _AppointmentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppointmentView.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppointmentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AppointmentView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppointmentView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppointmentView.vue?vue&type=template&id=a120e5e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AppointmentView.vue?vue&type=template&id=a120e5e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppointmentView_vue_vue_type_template_id_a120e5e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);