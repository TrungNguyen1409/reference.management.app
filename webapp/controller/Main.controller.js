sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("reference.management.app.controller.Main", {
		onInit(){
			const jsonData = {
				type: 'scientific_paper',
				title: "Deep Learning Approaches for Natural Language Processing",
				authors: ["John Doe", "Alice Smith"],
				publication_date: 16,
				journal:"Journal of Artificial Intelligence",
				volume: 25,
				issue: 2,
				pages: "150-165",
				doi: "10.1234/jai.2023.123456",
				abstract: "This paper explores various deep learning techniques used in natural language processing tasks such as sentiment analysis, text classification, and machine translation.",
				keywords: ["deep learning", "natural language processing", "sentiment analysis", "text classification", "machine translation"]

			};
			// create the model and pass the data
			const oModel = new JSONModel(jsonData);
			this.getView().setModel(oModel, "reference");

		}
	});
});
