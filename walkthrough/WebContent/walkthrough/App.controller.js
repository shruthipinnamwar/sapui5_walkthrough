//sap.ui.controller("walkthrough.App", {

sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/mvc/Controller',
	 "sap/ui/model/json/JSONModel",
	 "sap/ui/model/resource/ResourceModel"],

	function(MessageToast, Controller,JSONModel,ResourceModel) {
	var PageController = Controller.extend("sap.m.sample.Button.Page", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf walkthrough.App
*/
	onInit: function() {
		var oData = {
				recepient :{
					name : "World",
					value : "09876554",
					MATNR : "1"
				},
				Materials:{
					name : "abc",
					value : "09",
					number : "1"
				}
		};
		
		var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
		var i18nModel = new ResourceModel({
			bundleName:"walkthrough.i18n.i18n"
		});
			
		sap.ui.getCore().setModel(i18nModel,"i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf walkthrough.App
*/
//	onBeforeRendering: function() {
//
//	},
// SHow hello 
	onShowHello : function(){
		var oBundle = this.getView().getModel("i18n").getResourceBundle();
		var sRecipient = this.getView().getModel().getProperty("/recepient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
		
		//alert("Hello WOrld Shruthi");		
	},
// On press of Sample button	
	onPress: function (evt) {
	MessageToast.show(evt.getSource().getId() + " Pressed");
}


/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf walkthrough.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf walkthrough.App
*/
//	onExit: function() {
//
//	}
	});

	return PageController;

});