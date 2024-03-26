sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("reference.management.app.controller.Detail", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            this.getRouter().getRoute("literature").attachPatternMatched(this.onObjectMatched, this);
		},
        onObjectMatched(oEvent){
            const referenceId = oEvent.getParameter("arguments").referenceId;
            this.getView().bindElement("/literature/" + referenceId);
        }
	});
});
