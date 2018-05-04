jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.ui.model.odata.v2.ODataModel");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.TextUtil");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.Formatter");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.SO05GatewayFacade");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.NotesAndAttachmentsBaseController");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.SalesOrderProcessingDetailsHelper");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.SO0506ControllerHelper");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.ContactsHelper");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.model.SO05_Model");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.Gateway");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.NoDataText");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.HeaderFooter");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.view.RejectSalesOrder");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.FeatureSwitch");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.model.DataProvider");
jQuery.sap.require("cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper");
sap.ui.controller("cus.sd.sofulfil.monitor.s1.SOFULFIL_MONS1Extension.view.SO05Custom", {
	//    sId_BT_CREATE_DELIVERY_HEADER: "BT_CREATE_DELIVERY_HEADER",
	//    _OBJECT_HEADER_CONTAINER_ID: "SO05_Page_Vbox",
	//    _OBJECT_HEADER_FRAGMENT_ID: "SO05_ObjectHeaderFragment",
	//    issueCategory: "AllIssues",
	//    model: cus.sd.sofulfil.monitor.s1.model.SO05_Model,
	//    contactsModel: null,
	//    controllerHelper: null,
	//    contactsHelper: null,
	//    sopdHelper: null,
	//    createDeliveryWithMultipleItemsIsSupported: true,
	//    _oRejectObject: null,
	//    _oModelMetaData: null,
	//    _SalesOrderType: null,
	//    onInit: function () {
	//        var f = cus.sd.sofulfil.monitor.s1.utils.FeatureSwitch;
	//        var i = this.getView("SO05").byId("ICON_TABBAR");
	//        i.setModel(f.getFeatureModel(), "FeatureModel");
	//        this.controllerHelper = new cus.sd.sofulfil.monitor.s1.view.SO0506ControllerHelper(this);
	//        this.contactsHelper = new cus.sd.sofulfil.monitor.s1.view.ContactsHelper(this);
	//        this.sopdHelper = new cus.sd.sofulfil.monitor.s1.view.SalesOrderProcessingDetailsHelper(this);
	//        this.model.initialize();
	//        cus.sd.sofulfil.monitor.s1.view.NotesAndAttachmentsBaseController.prototype.onInit.call(this);
	//        this.oRouter.attachRouteMatched(this.controllerHelper.issueRouteMatcher, this.controllerHelper);
	//        this.controllerHelper._setCfgModel();
	//        this.createDeliveryWithMultipleItemsIsSupported = true;
	//        if (this.createDeliveryWithMultipleItemsIsSupported) {
	//            var _ = sap.ui.getCore().getEventBus();
	//            _.subscribe("cus.sd.sofulfil.monitor.s1", "SOFMSO05DisableCheckboxForItem", this._disableCheckboxForItemCallback, this);
	//        }
	//        if (this._oModelMetaData !== null) {
	//            cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.updateCheckboxesState(this.getView().byId("SO05_Tbl_OverdueItems").getItems(), this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData);
	//        }
	//        var s = sap.ui.core.Fragment.byId(this.getObjectHeaderFragmentId(), "SALES_ORDER_LINK_SO05");
	//        if (s) {
	//            s.attachPress(this.onSalesOrderPressed, this);
	//        }
	//    },
	//    onAfterRendering: function () {
	//        if (this._oModelMetaData !== null) {
	//            cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.updateCheckboxesState(this.getView().byId("SO05_Tbl_OverdueItems").getItems(), this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData);
	//        }
	//    },
	//    getHeaderFragment: function () {
	//        return "cus.sd.sofulfil.monitor.s1.view.SO05_ObjectHeader";
	//    },
	//    getObjectHeaderContainerId: function () {
	//        return this._OBJECT_HEADER_CONTAINER_ID;
	//    },
	//    getObjectHeaderFragmentId: function () {
	//        return this._OBJECT_HEADER_FRAGMENT_ID;
	//    },
	//    onExit: function () {
	//        this.cleanup();
	//        if (this.createDeliveryWithMultipleItemsIsSupported) {
	//            var _ = sap.ui.getCore().getEventBus();
	//            _.unsubscribe("cus.sd.sofulfil.monitor.s1", "SOFMSO05DisableCheckboxForItem", this._disableCheckboxForItemCallback, this);
	//        }
	//    },
	//    cleanup: function () {
	//        this.model.cleanup();
	//    },
	//    confirmDeliveryCreation: function () {
	//        var t = this;
	//        var d = new sap.m.Dialog("SO05_CreateDeliveryBlockDialog", {
	//            type: sap.m.DialogType.Message,
	//            beforeClose: function () {
	//                d.destroy();
	//            }
	//        });
	//        d.addStyleClass("sapUiSizeCompact");
	//        var a = this._getHighestDueDate();
	//        var f = cus.sd.sofulfil.monitor.s1.utils.Formatter.formatDateTimeAsDate(a);
	//        d.setTitle(cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("SO05_CreateDelivery"));
	//        var T = new sap.m.Text({ text: cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("SO05_DueDateForCreateDelivery", f) });
	//        d.addContent(T);
	//        d.setBeginButton(new sap.m.Button({
	//            text: cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("BUTTON_OK"),
	//            press: function () {
	//                d.destroy();
	//                t.createDelivery(a);
	//            }
	//        }));
	//        d.setEndButton(new sap.m.Button({
	//            text: cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("BUTTON_Cancel"),
	//            press: function () {
	//                d.destroy();
	//            }
	//        }));
	//        d.open();
	//    },
	//    _getHighestDueDate: function () {
	//        var a = this.getView().byId("SO05_Tbl_OverdueItems").getSelectedItems();
	//        var b = new Date();
	//        var d;
	//        for (var i = 0; i < a.length; i++) {
	//            d = a[i].getBindingContext("issue").getModel().getData().Items[i].DueDate;
	//            if (d > b) {
	//                b = d;
	//            }
	//        }
	//        return b;
	//    },
	    // _setHeaderFooter: function () {
	    // 	console.info("HiHi");
	    //     var t = this;
	    //     var m = this.model.issueModel;
	    //     var a = cus.sd.sofulfil.monitor.s1.utils.NavigatetoBackend.onToSalesOrderChange(this.model.order, this._SalesOrderType);
	    //     var b = null;
	    //     if (m.oData.status.info === sap.ui.core.ValueState.Error) {
	    //         if (this.createDeliveryWithMultipleItemsIsSupported) {
	    //             b = {
	    //                 sId: t.sId_BT_CREATE_DELIVERY_HEADER,
	    //                 sI18nBtnTxt: "BUTTON_CreateDelivery",
	    //                 bDisabled: !cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._areItemsSelected(this.getView(), "SO05_Tbl_OverdueItems"),
	    //                 onBtnPressed: function () {
	    //                     t.confirmDeliveryCreation();
	    //                 }
	    //             };
	    //         } else {
	    //             b = {
	    //                 sId: t.sId_BT_CREATE_DELIVERY_HEADER,
	    //                 sI18nBtnTxt: "BUTTON_CreateDelivery",
	    //                 onBtnPressed: function () {
	    //                     t.createDelivery();
	    //                 }
	    //             };
	    //         }
	    //     }
	       
	    //     var o = {
	    //         sI18NDetailTitle: "IssueDetails",
	    //         oEditBtn: b
	    //     };
	    //     if (sap.ui.Device.system.phone) {
	    //         o.onBack = function () {
	    //             t.oRouter.navTo("SOIS", t.controllerHelper.enhanceNavParams({
	    //                 salesOrderId: t.model.order,
	    //                 issueCategory: "SO05"
	    //             }), true);
	    //         };
	    //     }
	    //     this._oRejectObject = new cus.sd.sofulfil.monitor.s1.view.RejectSalesOrder(this);
	    //     this._oModelMetaData = this._oRejectObject.createModelData([
	    //         "IssueStatusAsObject",
	    //         "ItemStatusAsObject"
	    //     ]);
	    //     this._fillStaticModelMetaData(this._oModelMetaData.staticData);
	    //     this._fillDynamicModelMetaData(this._oModelMetaData.dynamicData);
	    //     this._oRejectObject.setModelData(this._oModelMetaData);
	    //     var c = !cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._areItemsSelected(this.getView(), "SO05_Tbl_OverdueItems");
	    //     o.buttonList = [];
	    //      //o.buttonList.push(myButton_save);
	    //     if (cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.haveItemsStillBlockReasons(this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData)) {
	    //         o.buttonList.push(this._oRejectObject.getRejectItemsButton(c));
	    //     }
	    //     if (this.extSetHeaderFooter) {
	    //         this.extSetHeaderFooter(o);
	    //     }
	    //     var j = this.controllerHelper.getJamInfos(m, this.model.issueCode, o);
	    //     var O = cus.sd.sofulfil.monitor.s1.utils.HeaderFooter.getHeaderFooter(j);
	    //     t.setHeaderFooterOptions(O);
	    // },
	    extSetHeaderFooter: function(o){
	    	 var that =this;
	    	 var myButton_save = {
	            
	                    sI18nBtnTxt: "Save",
	                    onBtnPressed:function(){
	                    
	                    	that.pressSave(that);
	                    } 
	                    
	
	        };
	    	 o.buttonList.push(myButton_save);
	    }
	//    _fillDynamicModelMetaData: function (_) {
	//        _.issue = this.model.issueModel.oData;
	//        _.salesOrderId = this.getSalesOrderId();
	//        _.items = this.model.issueModel.oData.Items;
	//        this._fillItemsToReject();
	//    },
	//    _fillStaticModelMetaData: function (_) {
	//        var t = this;
	//        _.issueStatusON = "status";
	//        _.issueStatusTextFN = "text";
	//        _.issueStatusInfoFN = "info";
	//        _.issueStatusCompletedFN = "completed";
	//        _.itemIdFN = "SalesOrderItem";
	//        _.itemStatusON = "status";
	//        _.itemStatusTextFN = "text";
	//        _.itemStatusInfoFN = "info";
	//        _.itemStatusCompletedFN = "completed";
	//        _.fnAfterModelChanged = function () {
	//            t._updateAfterRejectItems();
	//        };
	//    },
	//    _updateAfterRejectItems: function () {
	//        this.model.issueModel.refresh();
	//        if (this._oModelMetaData !== null) {
	//            cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.updateCheckboxesState(this.getView().byId("SO05_Tbl_OverdueItems").getItems(), this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData);
	//        }
	//        this._setHeaderFooter();
	//        this.getView().rerender();
	//    },
	//    _fillItemsToReject: function () {
	//        this._oModelMetaData.staticData.itemsToReject = new Array();
	//        this._oModelMetaData.dynamicData.itemsToReject = new Array();
	//        var s = cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._getSelectedPositions(this.getView(), "SO05_Tbl_OverdueItems", "issue");
	//        var _ = new cus.sd.sofulfil.monitor.s1.model.SOModelHelper(this.model);
	//        for (var i = 0; i < s.length; i++) {
	//            this._oModelMetaData.staticData.itemsToReject[i] = { "SalesOrderItem": s[i] };
	//            var a = _.getIndexForItemId(s[i]);
	//            this._oModelMetaData.dynamicData.itemsToReject[i] = this.model.issueModel.oData.Items[a];
	//        }
	//        this._oRejectObject.setModelData(this._oModelMetaData);
	//    },
	//    getSalesOrderId: function () {
	//        return this.model.order;
	//    },
	//    getFormattedTitle: function () {
	//        return cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("SO_SalesOrder") + " " + cus.sd.sofulfil.monitor.s1.utils.Formatter.formatSalesOrderNumber(this.getSalesOrderId());
	//    },
	//    onTabBarClicked: function (e) {
	//        var k = e.getParameters().selectedKey;
	//        switch (k) {
	//        case "hint":
	//            break;
	//        case "pin":
	//            this.updateNotesOnSalesOrderChange(this.model.order);
	//            break;
	//        case "att":
	//            this.updateAttachmentsOnSalesOrderChange(this.model.order);
	//            break;
	//        case "group":
	//            this.contactsHelper.loadContacts(this.model.order, this.model.issueCode, "");
	//            break;
	//        case "sopd":
	//            this.sopdHelper.loadSalesOrderDetails(this.model.order);
	//            break;
	//        default:
	//            break;
	//        }
	//    },
	//    _loadDataPostProcess: function () {
	//        var m = this.model.issueModel;
	//        if (!m.oData.Items) {
	//            this.getView().setModel(this.model.issueModel, "issue");
	//            this.model.updateHeaderStatus();
	//            this.model.issueModel.refresh();
	//            return;
	//        }
	//        if (this.extLoadDataPostProcess) {
	//            this.extLoadDataPostProcess(m);
	//        }
	//        this.getView().setModel(this.model.issueModel, "issue");
	//        this._setHeaderFooter();
	//        if (this._oModelMetaData !== null) {
	//            cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.updateCheckboxesState(this.getView().byId("SO05_Tbl_OverdueItems").getItems(), this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData);
	//        }
	//        this.getView().rerender();
	//    },
		  ,
	      extLoadDataPostProcess: function( m){
	      

	      } ,
	      pressSave: function(that){
	    		console.info("pressSave");
	    		//var odataModel2 = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZF0029_EXTENSION_SRV/");
				var odataModel = cus.sd.sofulfil.monitor.s1.model.DataProvider._getModel();
				var issue_Model = that.getView('SO05').getModel('issue');
				var data_SalesOrderItemDeliveryOverdueQuerySet = issue_Model.getData()['Items'];
				
				
				var batchChanges = [];  
				
				for (var i = 0; i < data_SalesOrderItemDeliveryOverdueQuerySet.length; i++) {
					
					var GenID = data_SalesOrderItemDeliveryOverdueQuerySet[i]['GenID'];
					var oEntry={};
					oEntry.GenID=GenID;
					oEntry.SalesOrder=data_SalesOrderItemDeliveryOverdueQuerySet[i]['SalesOrder'];
					oEntry.SalesOrderItem=data_SalesOrderItemDeliveryOverdueQuerySet[i]['SalesOrderItem'];
					oEntry.OrderQuantity=data_SalesOrderItemDeliveryOverdueQuerySet[i]['OrderQuantity'];
					oEntry.Status2=data_SalesOrderItemDeliveryOverdueQuerySet[i]['Status2'];
				    batchChanges.push(odataModel.createBatchOperation(encodeURI("/SalesOrderItemDeliveryOverdueQuerySet('"+GenID+"')"), "PUT",oEntry));
				}
				
				odataModel.addBatchChangeOperations(batchChanges);
				odataModel.setUseBatch(true);
				var fnSuccess =  function(){
				        		 cus.sd.sofulfil.monitor.s1.model.DataProvider.closeBusyDialog();
		            		     sap.m.MessageToast.show('Update Successfully',{duration:1000});
		            		  	 odataModel.refresh();
		              };
		         var errSuccess =   function(){
						cus.sd.sofulfil.monitor.s1.model.DataProvider.closeBusyDialog();
		                    sap.m.MessageToast.show('Update failed',{duration:1000});
		
		             };
		        cus.sd.sofulfil.monitor.s1.model.DataProvider.openBusyDialog();                         
				odataModel.submitBatch(fnSuccess,errSuccess);
				
				//var oEntry ={"GenID":".2~0000000010.3~000010.6~MZ-TG-Y200.9~Y200 Bike.10~ST","SalesOrder":"10","SalesOrderItem":"000010","DueDays":-178,"DueDate":"\/Date(1507593600000)\/","Material":"MZ-TG-Y200","SalesOrderItemText":"Y200 Bike","OrderQuantity":"48","OrderQuantityUnit":"PC","Status2":"TE01","status":{"info":"Error","text":"Creation of Delivery Pending"},"toMatFactsheet":"MZ-TG-Y200"};
					//	var GenID = data_SalesOrderItemDeliveryOverdueQuerySet[0]['GenID'];
					//	var oEntry={};
					//			oEntry.GenID=GenID;
					//			oEntry.SalesOrder=data_SalesOrderItemDeliveryOverdueQuerySet[0]['SalesOrder'];
					//			oEntry.SalesOrderItem=data_SalesOrderItemDeliveryOverdueQuerySet[0]['SalesOrderItem'];
								//oEntry.DueDays=-178;
								//oEntry.DueDate='2017-10-10T00:00:00';
								//oEntry.SalesOrderItemCategory='';
								//oEntry.SalesOrderItemCategoryName='';
								//oEntry.Material='MZ-TG-Y200';
								//oEntry.ProductionPlant='';
								//oEntry.PlantName='';
								//oEntry.SalesOrderItemText='Y200 Bike';
					//			oEntry.OrderQuantity=data_SalesOrderItemDeliveryOverdueQuerySet[0]['OrderQuantity'];
								//oEntry.OrderQuantityUnit='PC';
								//oEntry.NetAmount=5760.00;
								//oEntry.TransactionCurrency='';
								//oEntry.ShippingPoint='';
								//oEntry.ShippingPointName='';
								//oEntry.ShipToParty='';
								//oEntry.ShipToPartyName='';
					//			oEntry.Status2=data_SalesOrderItemDeliveryOverdueQuerySet[0]['Status2'];
								
							
					
				       
				       
				       /*
				        odataModel.setUseBatch(false); 
				        odataModel.update("/SalesOrderItemDeliveryOverdueQuerySet('"+GenID+"')",oEntry,null,
				        function(){
				        		 odataModel.setUseBatch(true); 
		            			alert('Data Updated Successfully');
		            			odataModel.refresh();
		              },function(){
							 odataModel.setUseBatch(true); 
		                    sap.m.MessageToast.show('Update failed',{duration:1000});
		
		             });*/
						/*
				        var batchChanges=[];
				        //batchChanges.push(new cus.sd.sofulfil.monitor.s1.model.DataProvider.BatchUpdateOperation("SalesOrderItemDeliveryOverdueQuerySet", "PUT", GenID, oEntry, null,null));
				        //cus.sd.sofulfil.monitor.s1.model.DataProvider.updateDataBatch(undefined, batchChanges, "error Louis", null, null);                         
				        var op = odataModel.createBatchOperation(encodeURI("/SalesOrderItemDeliveryOverdueQuerySet('"+GenID+"')"), "PUT",oEntry);
						odataModel.addBatchChangeOperations([op]);
						odataModel.submitBatch();  
				            */
	      }
	//    handleSubItemPress: function (e) {
	//        var b = e.getSource().getBindingContext("issue");
	//        var i = b.getObject().SalesOrderItem;
	//        this.oRouter.navTo("SO05Item", this.controllerHelper.enhanceNavParams({
	//            salesOrderId: this.model.order,
	//            itemId: i,
	//            issueCategory: this.issueCategory
	//        }), true);
	//    },
	//    createDelivery: function (d) {
	//        var t = this;
	//        var m = this.model.issueModel;
	//        function s(b) {
	//            t.deliveryCreationSuccess(b);
	//        }
	//        function e(E) {
	//            t.deliveryCreationError(E);
	//        }
	//        var a = m.getData().SalesOrder;
	//        cus.sd.sofulfil.monitor.s1.model.DataProvider.openBusyDialog();
	//        if (this.createDeliveryWithMultipleItemsIsSupported) {
	//            var i = cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._getSelectedPositions(this.getView(), "SO05_Tbl_OverdueItems", "issue");
	//            cus.sd.sofulfil.monitor.s1.view.SO05GatewayFacade.createDeliveryForItems(a, i, d, s, e);
	//        } else {
	//            cus.sd.sofulfil.monitor.s1.view.SO05GatewayFacade.createDelivery(a, "", s, e);
	//        }
	//    },
	//    deliveryCreationSuccess: function (b) {
	//        cus.sd.sofulfil.monitor.s1.model.DataProvider.closeBusyDialog();
	//        var g = cus.sd.sofulfil.monitor.s1.utils.Gateway;
	//        if (g.isErrorInODataBatchResponse(b)) {
	//            g.showErrorMsgFromGatewayResponse(b, "MSG_ErrorDeliveryCreation");
	//        } else {
	//            if (this.createDeliveryWithMultipleItemsIsSupported) {
	//                var r = this._getCreatedItemsAndMessagesLists(b);
	//                this._resolveIssueWithMultipleItemsIsSupported(r.createdItems);
	//                if (r.errorMessages === "") {
	//                    sap.m.MessageToast.show(cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryItemCreatedSuccessfully", r.createdItems), { duration: 2000 });
	//                } else {
	//                    var m = "";
	//                    var d = "";
	//                    if (r.createdItems === "") {
	//                        m = cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryCreatedNotSuccessfully");
	//                        d = cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryCreatedNotSuccessfullyComplete", r.errorMessages);
	//                    } else {
	//                        m = cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryCreatedIssueOccurred");
	//                        d = cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryItemCreatedSuccessfullyWithMessages", [
	//                            r.createdItems,
	//                            r.errorMessages
	//                        ]);
	//                    }
	//                    sap.m.MessageBox.show(d, {
	//                        icon: sap.m.MessageBox.Icon.ERROR,
	//                        title: m
	//                    });
	//                }
	//            } else {
	//                this._resolveIssue();
	//                return cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_DeliveryCreatedSuccessfully");
	//            }
	//        }
	//    },
	//    _getCreatedItemsAndMessagesLists: function (b) {
	//        var c = "";
	//        var e = "";
	//        if (b.__batchResponses[0] !== undefined && b.__batchResponses[0].__changeResponses !== undefined && b.__batchResponses[0].__changeResponses[0].data !== undefined && b.__batchResponses[0].__changeResponses[0].data.results !== undefined) {
	//            var r = b.__batchResponses[0].__changeResponses[0].data.results;
	//            var a = null;
	//            for (var i = 0; i < r.length; i++) {
	//                a = b.__batchResponses[0].__changeResponses[0].data.results[i];
	//                if (a.Status === "S") {
	//                    if (c !== "") {
	//                        c = c + ", ";
	//                    }
	//                    c = c + a.ItemNo;
	//                } else {
	//                    if (a.Status === "E") {
	//                        if (e !== "") {
	//                            e = e + ", ";
	//                        }
	//                        e = e + a.Message;
	//                    }
	//                }
	//            }
	//        }
	//        return {
	//            "createdItems": c,
	//            "errorMessages": e
	//        };
	//    },
	//    deliveryCreationError: function (e) {
	//        cus.sd.sofulfil.monitor.s1.model.DataProvider.closeBusyDialog();
	//        sap.m.MessageBox.show(e.message, {
	//            icon: sap.m.MessageBox.Icon.ERROR,
	//            title: cus.sd.sofulfil.monitor.s1.utils.TextUtil.getText("MSG_ODataCommunicationError")
	//        });
	//    },
	//    onHandleSalesOrderPress: function () {
	//        this.controllerHelper.displaySalesOrderDetails(this.model.order);
	//    },
	//    onContactPressed: function (e) {
	//        this.contactsHelper.onContactPressed(e);
	//    },
	//    onNavigateToSoldToFactSheet: function (e) {
	//        this.sopdHelper.onNavigateToSoldToFactSheet(e);
	//    },
	//    onNavigateToMaterialFactSheet: function (e) {
	//        this.sopdHelper.onNavigateToMaterialFactSheet(e);
	//    },
	//    _resolveIssue: function () {
	//        this.model.setAllToCompleted();
	//        this.model.issueModel.refresh();
	//        this.controllerHelper.triggerIssueSolved();
	//        this.getView().rerender();
	//        this._setHeaderFooter();
	//    },
	//    _resolveIssueWithMultipleItemsIsSupported: function (c) {
	//        if (c === null) {
	//            return;
	//        }
	//        var a = c.split(". ");
	//        if (a !== null) {
	//            for (var i = 0; i < a.length; i++) {
	//                this.model.setItemsToCompleted(a[i]);
	//                cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._disableCheckboxForItem(this.getView(), "SO05_Tbl_OverdueItems", a[i]);
	//            }
	//        }
	//        if (!cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils.haveItemsStillBlockReasons(this._oModelMetaData.dynamicData.items, this._oModelMetaData.staticData)) {
	//            this.controllerHelper.triggerIssueSolved();
	//            this.model.updateHeaderStatus();
	//            this.model.issueModel.refresh();
	//            this.getView().rerender();
	//        } else {
	//            this.model.issueModel.refresh();
	//        }
	//        this._setHeaderFooter();
	//    },
	//    _disableCheckboxForItemCallback: function (c, e, d) {
	//        cus.sd.sofulfil.monitor.s1.utils.MultipleSelectTableUtils._disableCheckboxForItem(this.getView(), "SO05_Tbl_OverdueItems", cus.sd.sofulfil.monitor.s1.utils.Formatter.stripLeadingZeros(d.itemID));
	//    },
	//    onSelectionChange: function () {
	//        var s = this.getView().byId("SO05_Tbl_OverdueItems").getSelectedItems();
	//        for (var i = 0; i < s.length; i++) {
	//            if (s[i].hasOwnProperty("isCheckBoxEnabled") === true) {
	//                if (s[i].isCheckBoxEnabled === false) {
	//                    s[i].setSelected(false);
	//                }
	//            }
	//        }
	//        this._setHeaderFooter();
	//    },
	//    onSalesOrderPressed: function (e) {
	//        cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper.onSalesOrderPressed(e);
	//    },
	//    onCustomerPressed: function (e) {
	//        cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper.onCustomerPressed(e);
	//    },
	//    onMaterialPressed: function (e) {
	//        cus.sd.sofulfil.monitor.s1.utils.SmartLinkHelper.onMaterialPressed(e);
	//    }
});