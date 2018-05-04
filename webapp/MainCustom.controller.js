sap.ui.controller("cus.sd.sofulfil.monitor.s1.SOFULFIL_MONS1Extension.MainCustom", {

	extHookAfterOnInit: function() {
		// Place your hook implementation code here 
		 cus.sd.sofulfil.monitor.s1.model.EntitySetDefinitions.addSelectFieldsToSelectFieldName("SO05","SalesOrderItemDeliveryOverdueQuerySet", "selectFieldsIssuePage","Status2");
		 cus.sd.sofulfil.monitor.s1.model.EntitySetDefinitions.addSelectFieldsToSelectFieldName("SO05","SalesOrderItemDeliveryOverdueQuerySet", "selectFieldsIssuePage","GenID");
		
	}

});