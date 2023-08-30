
const filters = document.querySelectorAll('#filters > button')

filters.forEach(function(filter){
	filter.addEventListener('click', function(evt){

		document.querySelectorAll('#filters > button').forEach(function(button){
			button.classList.remove('active')
		})

		this.classList.add('active')

		let category = this.getAttribute('id')

		if ( category === 'all' ){
			document.querySelectorAll('.hidden').forEach(function(div){
				div.classList.remove('hidden')
			})
		} else {
			document.querySelectorAll('li').forEach(function(div){
				div.classList.add('hidden')
			})
			
			document.querySelectorAll('.' + category).forEach(function(catMbr){
				catMbr.classList.remove('hidden')
			})
		}
	})
})

