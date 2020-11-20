class CLine {
	constructor({x, y, w, h, color, width}) {
		this.x = x;
		this.y = y;
		this.w = w;
        this.h = h;
		this.color = color;
		this.width = width;
		this.draw();
		this.prevCoords = {};
	}

	draw() {
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.width;
		ctx.lineCap = "round";
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x+this.w, this.y+this.h);
		ctx.stroke();
	}

	setPrevCoords() {
        this.prevCoords.x = this.x;
        this.prevCoords.y = this.y;
        this.prevCoords.w = this.w;
        this.prevCoords.h = this.h;    
	}
	move({x, y}) {
        if(x !== undefined) this.x = x;
        if(y !== undefined) this.y = y;
	}

	scale({w, h}) {
        if(w !== undefined) this.w = w;
        if(h !== undefined) this.h = h;
    }
}
