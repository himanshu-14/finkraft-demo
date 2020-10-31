var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var serverRootUrl = "https://torch-special-discovery.glitch.me";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            rows: [],
            loading: false
        }, _this.callApiUpdateState = function () {
            console.log("callApiUpdateState function called");
            _this.setState({ loading: true });
            var axiosRes = axios.get(serverRootUrl + '/contacts').then(function (axiosRes) {
                console.log("api call is done!!");
                console.log(axiosRes.data);
                _this.setState({ rows: axiosRes.data.contacts, loading: false });
            });
            //url is with respect to server root url         
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            console.log("App render function called");
            console.log(this.state.rows);
            return React.createElement(
                "div",
                { className: "container text-center" },
                React.createElement(
                    "h1",
                    null,
                    "React Zoho Contacts API Demo"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-success", onClick: this.callApiUpdateState },
                    "Refresh"
                ),
                this.state.loading ? React.createElement(
                    "h2",
                    null,
                    "Please wait.. Loading data"
                ) : this.state.rows.length == 0 ? React.createElement(
                    "h2",
                    null,
                    "Use Refresh Button to load data"
                ) : React.createElement(
                    "table",
                    { className: "table table-bordered table-hover table-condensed" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "Name"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Company Name"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Email"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Workphone"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "GST Treatment"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Receivables"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Payables"
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        this.state.rows.map(function (row) {
                            return React.createElement(
                                "tr",
                                { key: row.contact_id },
                                React.createElement(
                                    "td",
                                    null,
                                    row.contact_name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.company_name
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.email
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.phone
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.gst_treatment
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.outstanding_receivable_amount
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row.outstanding_payable_amount
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);