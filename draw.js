function draw() {
	ctx.clearRect(0, 0, 1100, 420);
	for (let obj of objList) obj.draw();
}
