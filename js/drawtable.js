function createCell (text, row) {
	var cell = document.createElement("td");
	var cellText = document.createTextNode(text);
	cell.appendChild(cellText);
	row.appendChild(cell);
}

function createRow (cell1text, cell2text, tblBody) {
	var row = document.createElement("tr");
	createCell(cell1text, row);
	createCell(cell2text, row);
	tblBody.appendChild(row);
}

function drawTable (estateValue, tax, effectiveRate, adjustedEstateValue, remainingEstate) {

	var tableHolder = document.getElementById("tableholder"); // element of page to put the table into

	// if we've already drawn a table, this deletes it so we can draw a new one
	if ( document.getElementById("taxtable") ) {
		tableHolder.removeChild(document.getElementById("taxtable"));
	}

	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	tbl.id="taxtable";
	tbl.className+="w3-table w3-table-all w3-bordered w3-striped";
	createRow("Estimated estate value", accounting.formatMoney(estateValue), tblBody);
	createRow("Value of estate subject to tax", accounting.formatMoney(adjustedEstateValue), tblBody);
	createRow("Tax you will pay", accounting.formatMoney(tax), tblBody);
	createRow("Effective tax rate", effectiveRate.toFixed(2) +"%", tblBody);
	createRow("Remaining value of estate after paying tax", accounting.formatMoney(remainingEstate), tblBody);

	tbl.appendChild(tblBody);
	tableHolder.appendChild(tbl);

}

