//your code here!

let totalList=10;
let ol=document.getElementById('infi-list');

window.addEventListener('load',()=>{
	for (let index = 1; index <= totalList; index++) {
		let li=document.createElement('li');
		li.innerText=`Item ${index}`;
		ol.append(li);
	}

	ol.addEventListener('scroll',()=>{
		let height=ol.offsetHeight;
		let offset=ol.scrollTop;

		if(offset+height>=ol.scrollHeight){
			for(let i=1;i<=2;i++){
				let li=document.createElement('li');
			li.innerText=`Item ${++totalList}`;
			ol.append(li);
			}
		}
	})
})
