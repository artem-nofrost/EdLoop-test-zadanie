const canvas  = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let canvasPos = canvas.getBoundingClientRect();
let objList = [];
let checked = false;

canvas.onmousedown = function(event) {
	// рисуем линию
	if(instrument.selected == '1') {
		// создаем фигуру
		checked = true;
		let startCoord = {
			x:	(event.clientX-canvasPos.x)*(canvas.width/canvas.clientWidth),
			y:	(event.clientY-canvasPos.y)*(canvas.height/canvas.clientHeight),
		};
		let figure;
		figure = instrument.list[instrument.selected].object({...startCoord, w:1, h:1});
		objList.push(figure);
		let prevCoords;
		prevCoords = {x:figure.x,y:figure.y,w:figure.w,h:figure.h};
		draw();
		window.onmousemove = function(move) {
			if(checked) {
				let moveCoord = {
					x:	(move.clientX-canvasPos.x)*(canvas.width/canvas.clientWidth),
					y:	(move.clientY-canvasPos.y)*(canvas.height/canvas.clientHeight),
				};
				let dx = moveCoord.x - startCoord.x;
				let dy = moveCoord.y - startCoord.y;
				let {x,y,w,h} = prevCoords;
				w = prevCoords.w+dx;
				h = prevCoords.h+dy;

				// следим за уходом за границы
				let bounds = {
					top: event.clientY- canvasPos.top,
					left: event.clientX- canvasPos.left,
					right: event.clientX- canvasPos.left,
					bottom: event.clientY- canvasPos.top,
				};
				if(bounds.top<instrument.width/2)	h = -(figure.y-instrument.width/2);
				if(bounds.left<instrument.width/2)	w = -(figure.x-instrument.width/2);
				if(bounds.right>=canvas.width-instrument.width/2)	w = canvas.width-figure.x-instrument.width/2;
				if(bounds.bottom>=canvas.height-instrument.width/2)	h = canvas.height-figure.y-instrument.width/2;
				
				// передвигаем и растягиваем
				figure.move({x,y});
				figure.scale({w,h});
			}
		draw();
		}
		window.onmouseup = function() {
			checked = false;
		}
	} 

	// рисуем карандашом
	if(instrument.selected=='0') {
		let x = event.offsetX*(canvas.width/canvas.clientWidth);
		let y = event.offsetY*(canvas.height/canvas.clientHeight);
		let figure = instrument.list[instrument.selected].object({x, y}); 
		objList.push(figure);
		canvas.onmousemove= function(event) {
			let x = event.offsetX*(canvas.width/canvas.clientWidth);
			let y = event.offsetY*(canvas.height/canvas.clientHeight);
			figure.addPoint(x, y);
			draw(); 
		}
		canvas.onmouseup = function(){
			canvas.onmousemove = null;
		}
	}	
}
