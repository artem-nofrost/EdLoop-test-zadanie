function activeBut (objclass) {
	let div = document.querySelectorAll(objclass);
	for(let elems of div) {
	elems.onclick = (function(event){
		elems.classList.remove('divchecked');
			if(this.classList.contains('divchecked')){	
				this.classList.remove('divchecked');
			} else {
				div.forEach(function(e) {
					e.classList.remove('divchecked')
				})
				this.classList.add('divchecked');
			}
		});
	}
}
