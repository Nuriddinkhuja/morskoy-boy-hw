const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');

const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data){
        this[data] += 1;
        this.render();
    },
    render(){
        record.textContent = this.record;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
};

const show = {
    hit(){

    },
    miss(element){
        this.changeClass(element, 'miss');
    },
    dead(){

    },
    changeClass(element, value){
        element.className = value
    }
}

const fire = (e) => {
    // console.log(e.target.className);  
    const target = e.target;
    const eClass = e.target.className;
    if (eClass != 'miss')  {
        play.updateData = 'shot';
    }
    
    show.miss(target);   
    
};

const init = () => {
    enemy.addEventListener('click', fire);
}

init();