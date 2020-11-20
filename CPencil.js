class CPencil {
        constructor({x, y, color, width}) { 
                this.x = x;
                this.y = y;
                this.color = color;
                this.width = width;
                this.points = [];
                this.points.push([x, y]);
                this.draw();
	}
	draw() {
                ctx.strokeStyle = this.color;
                ctx.lineCap = "round";
                ctx.lineJoin = 'round';
                ctx.lineWidth = this.width;
                ctx.beginPath();
                ctx.moveTo (this.points[0][0], this.points[0][1]);
                for(let i=1; i < this.points.length; i++) {
                        ctx.lineTo (this.points[i][0], this.points[i][1]);
                }
                ctx.stroke();
        }

        addPoint(x, y) {
                this.points.push([x, y]);
        }

        
}