sap.ui.define(["./BaseController","sap/ui/model/Filter","sap/ui/model/FilterOperator"], function (BaseController,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("reference.management.app.controller.ReferenceList", {
		onFilterReference(oEvent){
            // create some filters to filter data
            const aFilter = [];
            // get the query that is provided by the search field
            const sQuery = oEvent.getParameter("query");
            if(sQuery){
                console.log(sQuery)
                const combinedFilter = new Filter({
                    filters: [
                        new Filter("type", FilterOperator.Contains, sQuery),
                        new Filter("title", FilterOperator.Contains, sQuery),
                        new Filter("publication_date", FilterOperator.Contains, sQuery),
                    ],
                    and: false
                });
                aFilter.push(combinedFilter);
            }
            // get the reference to the table
            const oTable = this.byId("literature");
            //get the data from the table
            const oBinding = oTable.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPressReference(oEvent){
            // oItem refers to the clikced line, e.g., one customer
            var oItem = oEvent.getSource();
            console.log(oItem.getBindingContext().getPath());

            this.getRouter().navTo("literature",{
                referenceId: oItem.getBindingContext().getPath().substring('/literature/'.length)
            })
            //this.getRouter().navTo("detail");
        }
	});
});
