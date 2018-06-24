// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const tableGrid = document.querySelector('table');

//when submit is clicked, in table, append n rows and m columns

document.body.addEventListener('submit', function makeGrid(event) {
	while (tableGrid.firstChild) {
  tableGrid.removeChild(tableGrid.firstChild);
	}
	const n = document.getElementById("inputHeight").value;

	for(let height = 1; height <= n; height++) {
		const newRow = document.createElement('tr');
		const m = document.getElementById("inputWeight").value;

		for(let width = 1; width <= m; width++) {
			const newCell = document.createElement('td');

			newRow.appendChild(newCell);
		}

		tableGrid.appendChild(newRow);
	}
	event.preventDefault();
});

window.addEventListener('click', function makeColor(event) {
	const gridSquare = event.target;
//console.log(gridSquare.tagName);
	if(gridSquare.tagName !== 'TD') {
		return;
	}

	gridSquare.style.backgroundColor = document.getElementById('colorPicker').value;
});
