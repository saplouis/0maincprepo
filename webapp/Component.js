jQuery.sap.declare("cus.sd.sofulfil.monitor.s1.SOFULFIL_MONS1Extension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.sd.sofulfil.monitor.s1",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/SOFULFIL_MONS1"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.cus.sd.sofulfil.monitor.s1.Component.extend("cus.sd.sofulfil.monitor.s1.SOFULFIL_MONS1Extension.Component", {
	metadata: {
		manifest: "json"
	}
});