sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"], function (BaseController, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("reference.management.app.controller.CustomerPanel", {
        onSaveData: function () {

            let errorState = false;
            const aInputs = this.getView().getControlsByFieldGroupId("myInputs");
            aInputs.forEach(control => {
                if (control instanceof sap.m.Input 
                    && control.getValueState() === sap.ui.core.ValueState.Error) {
                        errorState = true;
                }
            })
            if(errorState){
                MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("validationError"));
            }else{
                this.onOpenDialog();

            }
        },
        onOpenDialog() {
            this.pDialog ??= this.loadFragment({
                name: "reference.management.app.view.Confirmation"
            });
            this.pDialog.then(oDialog => oDialog.open());
        },
        onCloseDialog() {
            this.byId("confirmDialog").close()
        },
        onAccept() {
            const oModel = this.getView().getModel();
            const aItems = oModel.getProperty("/customers");
            aItems.push({ ...this.getView().getModel("customer").getData() });
            oModel.setProperty("/customers", aItems);
            this.byId("confirmDialog").close()
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sCustomerName = this.getView().getModel("customer").getProperty("/firstName");
            const sMsg = oBundle.getText("saveMsg", [sCustomerName]);
            MessageToast.show(sMsg);

            // clear model
            this.getView().setModel(new JSONModel(), "customer");
        }
    });
});
