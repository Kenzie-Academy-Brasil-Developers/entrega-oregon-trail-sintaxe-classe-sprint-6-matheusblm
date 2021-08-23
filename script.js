class Traveler {
	constructor(name) {
	    this.name = name;
	    this.food = 0;
	    this._isHealthy = true
	}
	set initialFood (x){
		this.food = x
	}
	get getInitialFood(){
		return this.food
	}
	hunt(){
	this.food = this.food + 2
	}
	eat(){
		if(this.food > 0){
			this.food = this.food - 1
			this.isHealthy = true
		}else{
			this.isHealthy = false
		}	
	}
	
}
    
class Wagon {
	constructor(capacity) {
	    this.capacity = capacity;
	    this.passageiros = [];
	    this.full = false
	    this.food = 0
	}
	getAvailableSeatCount(){
		
		if(this.capacity > (this.passageiros.length - 1)){
			return this.capacity - this.passageiros.length 
		}else{
			this.full = true
			return 0
		}
	}
	join(name){
		if(this.full === false){
		this.passageiros.push(name)
		}
	}
	shouldQuarantine(){
		for(let i = 0; i < this.passageiros.length; i++){
			if(this.passageiros[i].isHealthy === false){
				return true
			}	
		}
	}
	totalFood(){
		for(let i = 0; i < this.passageiros.length; i++){
			return this.food += this.passageiros[i].food	
		}
	}
}
 


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
henrietta.initialFood = 1
juan.initialFood = 1
maude.initialFood = 1
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
