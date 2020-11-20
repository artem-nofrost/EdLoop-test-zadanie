let instrument = {
	//список инструментов
	list: [
		{
			type: "pencil",
			name: "pencil",
			object: (e)=>new CPencil({...e, color:instrument.selectedColor, width: instrument.width}), //объект, который создаёт этот инструмент
		},
		{
			type: "line",
			name: "liniya",
			object: (e)=>new CLine({...e, color:instrument.selectedColor, width: instrument.width}), 
		},
	],
	width:7,
	//номер выбранного инструмента
	selected: 0,
	selectedColor: "black",
	//выбор инструмента данного типа
	select(type) {
		this.selected = this.list.findIndex(e => e.type==type)
		console.log(this.selected);
	},
	selectColor(color) {
		this.selectedColor = color;
	},
}



//пользователь выбрал pencil
document.getElementById('pencil').onmousedown= function() {
	activeBut('.options'); 
	instrument.select("pencil");
}

//пользователь выбрал line
document.getElementById('line').onmousedown= function() {
	activeBut('.options'); 
	instrument.select("line");
}

// пользователь выбирает ширину pencil
document.getElementById('linesmenu').onmousedown = function(event){
	instrument.width = parseInt(event.target.dataset.length);
	activeBut('.lineswidth');
}


// пользователь очищает хост
document.getElementById('clear').onclick = function() {
	ctx.clearRect(0, 0, 1100, 420);
	objList.length = 0;
}

// пользователь выбирает цвет
document.getElementById('color').oninput = function() {
	instrument.selectColor(document.getElementById('color').value);
	console.log(document.getElementById('color').value);
}

