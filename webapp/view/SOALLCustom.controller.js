jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.Formatter");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SoallSettings");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SoallFunctions");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.NoDataText");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.model.DataProvider");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SBAnnotationFiles");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.NavigationParameter");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.personalization");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SoallCountModel");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.TextUtil");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.model.EntitySetDefinitions");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.FeatureSwitch");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.ReportVariants");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SoallActions");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.NavigatetoBackend");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper");
sap.ui.controller("cus.sd.sofulfil.monitor.s1.SOFULFIL_MONS1Extension.view.SOALLCustom", {
	//    countModel: {},
	//    oAbortObjects: {},
	//    _entitySetHeader: cus.sd.sofulfil.monitor.s1.model.EntitySetDefinitions.entitySets.SalesOrderFulfillmentIssueQuerySet,
	//    _oViewFilterDialog: null,
	//    _oViewSortDialog: null,
	//    onInit: function () {
	//        var f = "cus.sd.sofulfil.monitor.s1.view.SOALLSortSettings";
	//        this._oViewSortDialog = sap.ui.xmlfragment(f, this);
	//        f = "cus.sd.sofulfil.monitor.s1.view.SOALLFilterSettings";
	//        this._oViewFilterDialog = sap.ui.xmlfragment(f, this);
	//        jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView("SOALL"), this._oViewFilterDialog);
	//        cus.sd.sofulfil.monitor.s1.utils.SoallSettings.waitingForParalellTasks = {
	//            SOALL: false,
	//            AnnotationFile: false
	//        };
	//        cus.sd.sofulfil.monitor.s1.utils.SBAnnotationFiles.getStartFilter(this, "soall");
	//        this.countModel = cus.sd.sofulfil.monitor.s1.utils.SoallCountModel.createJsonModel();
	//        var i = this.getView("SOALL").byId("SOALL_ITB");
	//        i.setModel(this.countModel, "soallCountModel");
	//        var F = cus.sd.sofulfil.monitor.s1.utils.FeatureSwitch;
	//        i.setModel(F.getFeatureModel(), "FeatureModel");
	//        var p = this.getView("SOALL").byId("SOALL_Btn_Personalize");
	//        var t = this.getView("SOALL").byId("SOALL_Tbl");
	//        var r = cus.sd.sofulfil.monitor.s1.utils.ReportVariants;
	//        t.setModel(r.fnGetSettingsJsonModel(), "RepVar");
	//        cus.sd.sofulfil.monitor.s1.utils.personalization.fnInit(t, p);
	//        this._setRouterSetCloseDialogsFalse();
	//        this.oRouter.attachRouteMatched(this._handleRouteMatches, this);
	//        this.setHeaderFooterOptions(this._getFooterOptions());
	//        sap.ca.scfld.md.controller.BaseFullscreenController.prototype.onInit.apply(this, []);
	//    },
	//    onSalesOrderPressed: function (e) {
	//        cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper.onSalesOrderPressed(e);
	//    },
	//    onCustomerPressed: function (e) {
	//        cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper.onCustomerPressed(e);
	//    },
	//    onTabFilterSelect: function (e) {
	//        this._abortModelRead();
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallSettings.Settings;
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        s.iconTabSelected = e.getParameter("key");
	//        S._bindView(this.getView("SOALL"), this.abortObject, this.countModel, false, this._oViewSortDialog);
	//    },
	//    onHandleLineItemPress: function (e) {
	//        var c = e.getSource();
	//        var s = c.getBindingContext().getProperty("SalesOrder");
	//        var S = c.getBindingContext().getProperty("SalesOrderType");
	//        this._navToIssueDetail(s, c, S);
	//    },
	//    _setColumnListItemUnread: function (s, c, S) {
	//        var m = {};
	//        var C = c.getAggregation("cells");
	//        for (m = 0; m < C.length; m++) {
	//            if (C[m].getId().search("SOALL_CLI_Viewed") !== -1) {
	//                C[m].unbindProperty("src");
	//                C[m].setSrc("sap-icon://accept");
	//                m = C.length;
	//            }
	//        }
	//        c.setUnread(false);
	//        S.ProcessStatus.push({ "SalesOrder": s });
	//    },
	//    _abortModelRead: function () {
	//        if (this.oAbortObjects.hasOwnProperty("iconTabFilterNumbers")) {
	//            if (this.oAbortObjects.iconTabFilterNumbers.hasOwnProperty("abort")) {
	//                this.oAbortObjects.iconTabFilterNumbers.abort();
	//                delete this.oAbortObjects.iconTabFilterNumbers;
	//            }
	//        }
	//    },
	//    _navToIssueDetail: function (s, c, S) {
	//        var o = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var a = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        this._setRouterSetCloseDialogsTrue();
	//        this._setColumnListItemUnread(s, c, o);
	//        var n = cus.sd.sofulfil.monitor.s1.utils.NavigationParameter;
	//        var p = a.fnGetSortPath(this._oViewSortDialog);
	//        var b = this._oViewSortDialog.getProperty("sortDescending");
	//        n.memorizeNavParamSOALL("SOIS", o.lastSearch, p, b, S);
	//        var N = {
	//            salesOrderId: s,
	//            issueCategory: o.Settings.iconTabSelected
	//        };
	//        N = n.addNavParamSOALL(N);
	//        this.oRouter.navTo("SOIS", N, true);
	//    },
	//    onTableSearch: function (e) {
	//        this._abortModelRead();
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        S.lastSearch = e.getParameters().query;
	//        s._bindView(this.getView("SOALL"), this.abortObject, this.countModel, false, this._oViewSortDialog);
	//    },
	//    onActionRefresh: function () {
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        s._bindView(this.getView("SOALL"), this.abortObject, this.countModel, false, this._oViewSortDialog);
	//    },
	//    _getResultCell: function (t) {
	//        var s = t.getSelectedItem();
	//        var c = s.getAggregation("cells");
	//        var C;
	//        for (var h = 0; h < c.length; h++) {
	//            C = c[h].getId();
	//            if (C.indexOf("SOALL_CLI_lastActionResultText") !== -1) {
	//                return c[h];
	//            }
	//        }
	//    },
	//    _getFooterOptions: function () {
	//        var t = this;
	//        var f = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var v = cus.sd.sofulfil.monitor.s1.utils.ReportVariants.fnGetVariant();
	//        var r = cus.sd.sofulfil.monitor.s1.utils.ReportVariants.fnGetSettingsJsonModel();
	//        var T = cus.sd.sofulfil.monitor.s1.utils.TextUtil;
	//        var s = T.getText("FULLSCREEN_TITLE");
	//        var a = cus.sd.sofulfil.monitor.s1.utils.ReportVariants.fnGetReportVariantTitle();
	//        if (a !== "") {
	//            s = T.getText("TitleSubtitle", [
	//                s,
	//                a
	//            ]);
	//        }
	//        var o = {
	//            sFullscreenTitle: s,
	//            onBack: function () {
	//                window.history.back();
	//            }
	//        };
	//        var A = cus.sd.sofulfil.monitor.s1.utils.SoallActions;
	//        var b = this.byId("SOALL_Tbl");
	//        o.buttonList = [];
	//        if (r.getProperty("/" + v + "/buttons/RejectSalesOrder/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function (e) {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var R = t._getResultCell(b);
	//                    A.fnRejectSalesOrder(S, R);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/RejectSalesOrder/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_RejectSalesOrder"),
	//                sId: "SOALL_RejectSalesOrder"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/ChangeIncompletion/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function (e) {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var A = cus.sd.sofulfil.monitor.s1.utils.NavigatetoBackend;
	//                    A.onOpenInSalesOrderIncompletionLog(S);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/ChangeIncompletion/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_ChangeIncompletion"),
	//                sId: "SOALL_ChangeIncompletionSalesOrder"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/RemoveDeliveryBlock/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function (e) {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var R = t._getResultCell(b);
	//                    A.fnRemoveDeliveryBlock(S, R);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/RemoveDeliveryBlock/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_RemoveDeliveryBlock"),
	//                sId: "SOALL_RemoveDeliveryBlock"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/RemoveBillingBlock/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function () {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var R = t._getResultCell(b);
	//                    A.fnRemoveBillingBlock(S, R);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/RemoveBillingBlock/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_RemoveBillingBlock"),
	//                sId: "SOALL_RemoveBillingBlock"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/ReCheckCredit/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function () {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var R = t._getResultCell(b);
	//                    A.fnReCheckCredit(S, R);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/ReCheckCredit/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_RecheckCredit"),
	//                sId: "SOALL_ReCheckCredit"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/DisplayDocumentedCreditDecision/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function () {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    cus.sd.sofulfil.monitor.s1.utils.NavigatetoBackend.onOpenInCreditManagementDisplay("display", "VBAK", S);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/DisplayDocumentedCreditDecision/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_DisplayCreditAccount"),
	//                sId: "SOALL_DisplayDocumentedCreditDecision"
	//            });
	//        }
	//        if (r.getProperty("/" + v + "/buttons/ProcessFlow/visible")) {
	//            o.buttonList.push({
	//                onBtnPressed: function () {
	//                    var S = f.getSelectedProperty(b, "SalesOrder");
	//                    var c = b.getSelectedItem();
	//                    var d = f.getSelectedProperty(b, "SalesOrderType");
	//                    t._onButtonProcessFlowPress(S, c, d);
	//                },
	//                bDisabled: r.getProperty("/" + v + "/buttons/ProcessFlow/bDisabled"),
	//                sI18nBtnTxt: T.getText("BUTTON_ProcessFlow"),
	//                sId: "BUTTON_ProcessFlowId"
	//            });
	//        }
	//        function O(e) {
	//            var n = cus.sd.sofulfil.monitor.s1.utils.NavigatetoBackend;
	//            var S = f.getSelectedProperty(b, "SalesOrder");
	//            var c = f.getSelectedProperty(b, "SalesOrderType");
	//            var B = [];
	//            if (r.getProperty("/" + v + "/buttons/OpenIn/ChangeSalesOrder/visible")) {
	//                B.push(new sap.m.Button({
	//                    text: T.getText("BUTTON_ChangeSalesOrder"),
	//                    press: [
	//                        function (e) {
	//                            n.onOpenInSalesOrderChange(S, c);
	//                        },
	//                        this
	//                    ]
	//                }));
	//            }
	//            var d = new sap.m.ActionSheet({
	//                placement: sap.m.PlacementType.Top,
	//                showCancelButton: false,
	//                buttons: B
	//            });
	//            d.openBy(e.getSource());
	//        }
	//        ;
	//        return o;
	//    },
	//    onSelectionChange: function (e) {
	//        this.fnFooterButtonEnableDisable(this, false);
	//    },
	//    fnFooterButtonEnableDisable: function (t, d) {
	//        var f = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var v = cus.sd.sofulfil.monitor.s1.utils.ReportVariants;
	//        var a = v.fnGetSettingsJsonModel().getProperty("/AllButtons");
	//        var T = this.getView("SOALL").byId("SOALL_Tbl");
	//        var c = T.getSelectedContexts()[0];
	//        var i = f.getSelectedIssues(T);
	//        var r = v.fnGetSettingsJsonModel();
	//        var V = v.fnGetVariant();
	//        if (c !== undefined) {
	//            f.fnButtonDisable(i, a, a[0], i.InOrder, r, V);
	//            f.fnButtonDisable(i, a, a[6], 1, r, V);
	//            f.fnButtonDisable(i, a, a[7], 1, r, V);
	//            switch (V) {
	//            case v._cDeliveryBlock:
	//                f.fnButtonDisable(i, a, a[2], i.NmbrOfIssuesDeliveryBlkd, r, V);
	//                break;
	//            case v._cBillingBlock:
	//                f.fnButtonDisable(i, a, a[3], i.NmbrOfIssuesBillingBlocked, r, V);
	//                break;
	//            case v._cCreditBlock:
	//                f.fnButtonDisable(i, a, a[4], i.NmbrOfIssuesCreditBlocked, r, V);
	//                f.fnButtonDisable(i, a, a[5], i.NmbrOfIssuesCreditBlocked, r, V);
	//                break;
	//            case v._cIncomplete:
	//                f.fnButtonDisable(i, a, a[1], i.NmbrOfIssuesIncomplete, r, V);
	//                break;
	//            case v._cDefault:
	//                f.fnButtonDisable(i, a, a[1], i.NmbrOfIssuesIncomplete, r, V);
	//                f.fnButtonDisable(i, a, a[2], i.NmbrOfIssuesDeliveryBlkd, r, V);
	//                f.fnButtonDisable(i, a, a[3], i.NmbrOfIssuesBillingBlocked, r, V);
	//                f.fnButtonDisable(i, a, a[4], i.NmbrOfIssuesCreditBlocked, r, V);
	//                f.fnButtonDisable(i, a, a[5], i.NmbrOfIssuesCreditBlocked, r, V);
	//                break;
	//            default:
	//                break;
	//            }
	//        } else {
	//            for (var h = 0; h < a.length; h++) {
	//                r.setProperty("/" + V + "/buttons/" + a[h] + "/bDisabled", true);
	//            }
	//        }
	//        t.setHeaderFooterOptions(t._getFooterOptions());
	//    },
	//    onSortPressed: function () {
	//        var d = cus.sd.sofulfil.monitor.s1.model.DataProvider;
	//        jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView("SOALL"), this._oViewSortDialog);
	//        this._oViewSortDialog.setModel(d._getModel("i18n"), "i18n");
	//        this._oViewSortDialog.open();
	//    },
	//    onSortConfirm: function (e) {
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var t = this.byId("SOALL_Tbl");
	//        s.fnConfirmSettings(e, t);
	//    },
	//    onSortCancel: function (e) {
	//    },
	//    _setRouterSetCloseDialogsTrue: function () {
	//        var c = sap.ca.scfld.md.app.Application.getImpl().getComponent("cus.sd.sofulfil.monitor.s1.Component");
	//        if (c.setRouterSetCloseDialogs) {
	//            c.setRouterSetCloseDialogs(true);
	//        }
	//    },
	//    _setRouterSetCloseDialogsFalse: function () {
	//        var c = sap.ca.scfld.md.app.Application.getImpl().getComponent("cus.sd.sofulfil.monitor.s1.Component");
	//        if (c.setRouterSetCloseDialogs) {
	//            c.setRouterSetCloseDialogs(false);
	//        }
	//    },
	//    onUpdateStarted: function (c) {
	//        c.getSource().removeSelections(true);
	//        this.fnFooterButtonEnableDisable(this, true);
	//        cus.sd.sofulfil.monitor.s1.utils.NoDataText.onUpdateStarted(c);
	//    },
	//    onUpdateFinished: function (c) {
	//        cus.sd.sofulfil.monitor.s1.utils.NoDataText.onUpdateFinished(c);
	//    },
	//    onExit: function () {
	//        this._oViewFilterDialog.destroy();
	//        this._oViewSortDialog.destroy();
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        s.Settings.iconTabSelected = "AllIssues";
	//        s.ProcessStatus = [];
	//        s.lastSearch = "";
	//        s.ViewSettingsFilterData.afilter = [];
	//        s.waitingForParalellTasks = {
	//            SOALL: false,
	//            AnnotationFile: false
	//        };
	//        var o = cus.sd.sofulfil.monitor.s1.utils.SBAnnotationFiles;
	//        o._oSource = {
	//            soall: false,
	//            component: false
	//        };
	//        o._aStartFilterFilter = [];
	//        o._sEvaluationId = "";
	//        o._aSelectOptions = [];
	//        var r = cus.sd.sofulfil.monitor.s1.utils.ReportVariants;
	//        r.StartupParameterRead = false;
	//        r._settingsJsonModel = null;
	//    },
	//    _noBinding: function (b) {
	//        var B = false;
	//        if (b === undefined) {
	//            B = true;
	//        }
	//        return B;
	//    },
	//    _getNavigationParameter: function (n, s, S) {
	//        if (n.hasOwnProperty("SearchFieldValue")) {
	//            s.lastSearch = n.SearchFieldValue;
	//        }
	//        if (n.hasOwnProperty("issueCategory")) {
	//            if (s.Settings.iconTabBarFilter.hasOwnProperty(n.issueCategory) === false) {
	//                n.issueCategory = "AllIssues";
	//            }
	//            s.Settings.iconTabSelected = n.issueCategory;
	//        }
	//        if (n.hasOwnProperty("SortField") && n.hasOwnProperty("SortDirection")) {
	//            if (n.SortDirection === "true") {
	//                S.fnUpdateSortSettings(this._oViewSortDialog, n.SortField, true);
	//            } else {
	//                S.fnUpdateSortSettings(this._oViewSortDialog, n.SortField, false);
	//            }
	//        }
	//    },
	//    _handleRouteMatches: function (e) {
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var c = false;
	//        var t = this.getView("SOALL").byId("SOALL_Tbl");
	//        switch (e.getParameter("name")) {
	//        case "SOALL":
	//            this._getNavigationParameter(e.getParameter("arguments"), S, s);
	//            c = this._noBinding(t.getBinding("items"));
	//            break;
	//        case "SOALLCatchAll":
	//            c = this._noBinding(t.getBinding("items"));
	//            break;
	//        default:
	//            c = false;
	//            break;
	//        }
	//        if (c) {
	//            if (S.lastSearch !== undefined && S.lastSearch !== "") {
	//                this.getView("SOALL").byId("SOALL_Src_SearchField").setValue(S.lastSearch);
	//            }
	//            var i = S.Settings.iconTabSelected;
	//            this.getView("SOALL").byId("SOALL_ITB").setSelectedKey(i);
	//            S.waitingForParalellTasks.SOALL = true;
	//            this.createSoallTable("SOALL");
	//        }
	//    },
	//    createSoallTable: function (s) {
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var o = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var w = o.waitingForParalellTasks;
	//        if (w.SOALL === true && w.AnnotationFile === true) {
	//            this.getView("SOALL").byId("SOALL_Btn_Filter").setEnabled();
	//            S._bindView(this.getView("SOALL"), this.oAbortObjects, this.countModel, true, this._oViewSortDialog);
	//        }
	//    },
	//    _onButtonIssueDetailsPress: function (e) {
	//        var s = e.getSource().getParent().sSalesOrderId;
	//        var c = e.getSource().getParent().oColumnListItem;
	//        var S = e.getSource().getParent().sSalesOrderType;
	//        this._navToIssueDetail(s, c, S);
	//    },
	//    _onButtonProcessFlowPress: function (s, c, S) {
	//        var o = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var a = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        this._setColumnListItemUnread(s, c, o);
	//        var p = a.fnGetSortPath(this._oViewSortDialog);
	//        var b = this._oViewSortDialog.getProperty("sortDescending");
	//        var n = cus.sd.sofulfil.monitor.s1.utils.NavigationParameter;
	//        n.memorizeNavParamSOALL("PF", o.lastSearch, p, b, S);
	//        var N = {
	//            salesOrderId: s,
	//            issueCategory: cus.sd.sofulfil.monitor.s1.utils.SoallSettings.Settings.iconTabSelected
	//        };
	//        N = n.addNavParamSOALL(N);
	//        var r = true;
	//        this.oRouter.navTo("SOProcessFlow", N, r);
	//    },
	//    _setParameterHash: function (h, p, P) {
	//        var f = false;
	//        for (var a = 0; a < h.length; a++) {
	//            if (h[a] === p) {
	//                a = a + 1;
	//                h[a] = P;
	//                f = true;
	//                a = h.length;
	//            }
	//        }
	//        if (f === false) {
	//            h.push(p);
	//            h.push(P);
	//        }
	//        return h;
	//    },
	//    _preventUndefined: function (v) {
	//        if (v === undefined || v === null) {
	//            v = "";
	//        }
	//        return v;
	//    },
	//    _getNavParameter: function () {
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallSettings;
	//        var S = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var p = S.fnGetSortPath(this._oViewSortDialog);
	//        var b = this._oViewSortDialog.getProperty("sortDescending");
	//        return {
	//            SearchFieldValue: this._preventUndefined(s.lastSearch),
	//            SortField: this._preventUndefined(p),
	//            SortDirection: this._preventUndefined(b),
	//            category: this._preventUndefined(s.Settings.iconTabSelected)
	//        };
	//    },
	//    _checkRouteSOALL: function (h) {
	//        var f = false;
	//        for (var e = 0; e < h.length; e++) {
	//            if (h[e] === "SOALL") {
	//                f = true;
	//                e = h.length;
	//            }
	//        }
	//        if (f === false) {
	//            h[h.length - 1] = h[h.length - 1] + "&/SOALL";
	//        }
	//        return h;
	//    },
	//    _onButtonFactSheetPress: function (e) {
	//        var s = e.getSource().getParent().sSalesOrderId;
	//        var h = new sap.ui.core.routing.HashChanger();
	//        var H = h.getHash();
	//        var a = H.split("/");
	//        var n = this._getNavParameter();
	//        a = this._checkRouteSOALL(a);
	//        a = this._setParameterHash(a, "SearchFieldValue", n.SearchFieldValue);
	//        a = this._setParameterHash(a, "SortField", n.SortField);
	//        a = this._setParameterHash(a, "SortDirection", n.SortDirection);
	//        a = this._setParameterHash(a, "category", n.category);
	//        H = "";
	//        var S = "";
	//        for (var i = 0; i < a.length; i++) {
	//            S = H;
	//            H = S.concat(a[i]);
	//            if (i + 1 < a.length) {
	//                S = H;
	//                H = S.concat("/");
	//            }
	//        }
	//        h.setHash(H);
	//        if (cus.sd.sofulfil.monitor.s1.model.DataProvider.isMock()) {
	//            cus.sd.sofulfil.monitor.s1.model.DataProvider.displayFactSheetInfoForMockMode("SalesOrder", "displayFactSheet", { SalesOrder: s });
	//        } else {
	//            var f = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;
	//            this.oCrossAppNavigator = f && f("CrossApplicationNavigation");
	//            var t = this.oCrossAppNavigator && this.oCrossAppNavigator.hrefForExternal({
	//                target: {
	//                    semanticObject: "SalesOrder",
	//                    action: "displayFactSheet"
	//                },
	//                params: { SalesOrder: s }
	//            }) || "";
	//            if (t) {
	//                sap.m.URLHelper.redirect(t);
	//            }
	//        }
	//    },
	//    onFilterDialogConfirm: function (e) {
	//        var v = e.getSource();
	//        var s = this.getView("SOALL");
	//        var i = s.byId("SOALL_InfoFilterBar");
	//        var I = s.byId("SU01_Lbl_InfoFilterBar");
	//        var f = v.getSelectedFilterString();
	//        if (f !== "") {
	//            i.setVisible(true);
	//            I.setText(f);
	//        } else {
	//            i.setVisible(false);
	//            I.setText(f);
	//        }
	//        var F = v.getFilterItems();
	//        var S = v.getSelectedFilterItems();
	//        var a = "";
	//        var b = "";
	//        var c = [];
	//        var d = [];
	//        var g = [];
	//        for (var h = 0; h < F.length; h++) {
	//            a = F[h].getKey();
	//            c = [];
	//            for (var j = 0; j < S.length; j++) {
	//                b = S[j].getParent().getKey();
	//                if (a === b) {
	//                    c.push(new sap.ui.model.Filter({
	//                        path: a,
	//                        operator: "EQ",
	//                        value1: S[j].getKey()
	//                    }));
	//                }
	//            }
	//            if (c.length === 1) {
	//                d.push(c[0]);
	//            } else if (c.length >= 2) {
	//                d.push(new sap.ui.model.Filter({
	//                    filters: c,
	//                    and: false
	//                }));
	//            }
	//        }
	//        if (d.length === 1) {
	//            g.push(d[0]);
	//        } else if (d.length >= 2) {
	//            g.push(new sap.ui.model.Filter({
	//                filters: d,
	//                and: true
	//            }));
	//        }
	//        cus.sd.sofulfil.monitor.s1.utils.SoallSettings.ViewSettingsFilterData.afilter = g;
	//        cus.sd.sofulfil.monitor.s1.utils.SoallFunctions._bindView(this.getView("SOALL"), this.oAbortObjects, this.countModel, false, this._oViewSortDialog);
	//    },
	//    onFilterDialogCancel: function (e) {
	//    },
	//    onFilterDialogResetFilters: function (e) {
	//    },
	//    onFilterPressed: function (e) {
	//        this.setFilterItemsBinding(this._oViewFilterDialog);
	//        this._oViewFilterDialog.open();
	//    },
	//    setFilterItemsBinding: function (v) {
	//        var d = cus.sd.sofulfil.monitor.s1.model.DataProvider;
	//        var s = cus.sd.sofulfil.monitor.s1.utils.SoallFunctions;
	//        var f = [];
	//        f = s.addKpiFilter(f);
	//        if (v.getFilterItems()[0].getAggregation("items").length === 0) {
	//            v.getFilterItems()[0].getBinding("items").refresh();
	//        } else {
	//            if (v.getFilterItems()[0].getBindingInfo("items") === undefined) {
	//                v.getFilterItems()[0].bindAggregation("items", {
	//                    path: "/" + this._entitySetHeader,
	//                    template: v.getFilterItems()[0].getAggregation("items")[0].clone(),
	//                    sorter: [
	//                        new sap.ui.model.Sorter("IssueCategory", false),
	//                        new sap.ui.model.Sorter("Issue", false)
	//                    ],
	//                    filters: f,
	//                    parameters: { select: "IssueCategory,Issue,IssueName" }
	//                });
	//            }
	//        }
	//        if (v.getFilterItems()[1].getAggregation("items").length === 0) {
	//            v.getFilterItems()[1].getBinding("items").refresh();
	//        } else {
	//            if (v.getFilterItems()[1].getBindingInfo("items") === undefined) {
	//                v.getFilterItems()[1].bindAggregation("items", {
	//                    path: "/" + this._entitySetHeader,
	//                    template: v.getFilterItems()[1].getAggregation("items")[0].clone(),
	//                    sorter: new sap.ui.model.Sorter("SalesOrderType", false),
	//                    filters: f,
	//                    parameters: { select: "SalesOrderType,SalesOrderTypeName" }
	//                });
	//            }
	//        }
	//        if (v.getFilterItems()[2].getAggregation("items").length === 0) {
	//            v.getFilterItems()[2].getBinding("items").refresh();
	//        } else {
	//            if (v.getFilterItems()[2].getBindingInfo("items") === undefined) {
	//                v.getFilterItems()[2].bindAggregation("items", {
	//                    path: "/" + this._entitySetHeader,
	//                    template: v.getFilterItems()[2].getAggregation("items")[0].clone(),
	//                    sorter: new sap.ui.model.Sorter("SalesOrganization", false),
	//                    filters: f,
	//                    parameters: { select: "SalesOrganization,SalesOrganizationName" }
	//                });
	//            }
	//        }
	//        if (v.getFilterItems()[3].getAggregation("items").length === 0) {
	//            v.getFilterItems()[3].getBinding("items").refresh();
	//        } else {
	//            if (v.getFilterItems()[3].getBindingInfo("items") === undefined) {
	//                v.getFilterItems()[3].bindAggregation("items", {
	//                    path: "/" + this._entitySetHeader,
	//                    template: v.getFilterItems()[3].getAggregation("items")[0].clone(),
	//                    sorter: new sap.ui.model.Sorter("SalesGroup", false),
	//                    filters: f,
	//                    parameters: { select: "SalesGroup,SalesGroupName" }
	//                });
	//            }
	//        }
	//        if (v.getFilterItems()[4].getAggregation("items").length === 0) {
	//            v.getFilterItems()[4].getBinding("items").refresh();
	//        } else {
	//            if (v.getFilterItems()[4].getBindingInfo("items") === undefined) {
	//                v.getFilterItems()[4].bindAggregation("items", {
	//                    path: "/" + this._entitySetHeader,
	//                    template: v.getFilterItems()[4].getAggregation("items")[0].clone(),
	//                    sorter: new sap.ui.model.Sorter("SalesOffice", false),
	//                    filters: f,
	//                    parameters: { select: "SalesOffice,SalesOfficeName" }
	//                });
	//            }
	//        }
	//        v.setModel(d._getModel());
	//        v.setModel(d._getModel("i18n"), "i18n");
	//    }
});