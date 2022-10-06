function draw(){
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.strokeRect(320, 50, 680, 680);
        ctx.strokeRect(320, 50, 680, 680);
        ctx.fillStyle="green";
        ctx.fillRect(680, 90, 40, 40);
        ctx.fillStyle="yellow";
        ctx.fillRect(920, 90, 20, 20);
        var l=0;
        let snake=[];
        var over=0;
        let previous = {
           "x": 680,
           "y": 90,
           "z":40,
           "w":40
        }
        snake.push(previous);
        let food={
            "x": 920,
            "y": 90,
            "z":20,
        }
        let u=0;
        let r=0;
        let p=0;
        let d=0;

        let s=1;
        setInterval(()=>{if(over==0){
            
            ctx.clearRect(previous.x, previous.y,previous.z,previous.w);
            if(previous.x>=(680+320)){
                previous.x=320;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }if(previous.x<320){
                previous.x=1000;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }
            if(previous.y>=(680+50)){
                previous.y=50;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }
            if(previous.y<50){
                previous.y=730;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }
if(previous.x>=food.x-20&&previous.x<=food.x+20&& previous.y>=food.y-20&&previous.y<=food.y+20){
    let points=document.getElementById("points");
    let fooda=new Audio("./sound/food.mp3");
    fooda.play();
    points.innerHTML=parseInt(points.innerHTML)+1;
    snake.push(previous);
    ctx.clearRect(food.x, food.y,food.z,food.z);
    food.x=Math.floor(Math.random()*(1000-320))+320;
    food.y=Math.floor(Math.random()*(730-50))+50;
    ctx.fillStyle="yellow";
    ctx.fillRect(food.x, food.y,food.z,food.z);
}

if(l==0){
    snake.map(x=>{
        ctx.fillStyle="green";
        ctx.clearRect(x.x, x.y, 40,40);
    })
    for(let j=0;j<snake.length;j++){
        if(snake[j].x>=1000){
            over=1;
            let overa=new Audio("./sound/gameover.mp3");
            overa.play();
            overa.play();
            ctx.clearRect(320, 50, 680, 680);
            ctx.font = "30px Arial";
            ctx.strokeText(`Game Over\nPoints-${points.innerHTML}\n Space to REstart`, 10, 50);
        }else{
        console.log(snake[j].x ,j);
    snake[j].x=snake[j].x+10;
        }}
            snake.map(x=>{
                ctx.fillStyle="green";
                ctx.fillRect(x.x, x.y, 40,40);
                
            }
            )
    
}else if(l==1){
    snake.map(x=>{
        ctx.fillStyle="green";
        ctx.clearRect(x.x, x.y, 40,40);
    })
    for(let j=0;j<snake.length;j++){
        
        if(snake[j].y>=730){
            over=1;
            let overa=new Audio("./sound/gameover.mp3");
            overa.play();
            overa.play();
            ctx.clearRect(320, 50, 680, 680);
            ctx.font = "30px Arial";
            ctx.strokeText(`Game Over\nPoints-${points.innerHTML}\n Space to REstart`, 10, 50);
        console.log(snake[j].y ,j);
    }else{
        snake[j].y=snake[j].y+10;
    }}
            snake.map(x=>{
                ctx.fillStyle="green";
                ctx.fillRect(x.x, x.y, 40,40);
                
            })
}else if(l==2){
    snake.map(x=>{
        ctx.fillStyle="green";
        ctx.clearRect(x.x, x.y, 40,40);
    })
    for(let j=0;j<snake.length;j++){
        if(snake[j].y<90){

            over=1;
            let overa=new Audio("./sound/gameover.mp3");
            overa.play();
            overa.play();
            ctx.clearRect(320, 50, 680, 680);
            ctx.font = "30px Arial";
            ctx.strokeText(`Game Over\nPoints-${points.innerHTML}\n Space to REstart`, 10, 50);
        console.log(snake[j].y ,j);
    }else{
        snake[j].y=snake[j].y-10;
    }}
            snake.map(x=>{
                ctx.fillStyle="green";
                ctx.fillRect(x.x, x.y, 40,40);
                
            })
}else {
    snake.map(x=>{
        ctx.fillStyle="green";
        ctx.clearRect(x.x, x.y, 40,40);
    })
   
    for(let j=0;j<snake.length;j++){
        if(snake[j].x<=320){  over=1;
            let overa=new Audio("./sound/gameover.mp3");
            overa.play();
            overa.play();
            ctx.clearRect(320, 50, 680, 680);
            ctx.font = "30px Arial";
            ctx.strokeText(`Game Over\nPoints-${points.innerHTML}\n Space to REstart`, 10, 50);
        console.log(snake[j].x ,j);
    }else{
        console.log(snake[j].x ,j);
    snake[j].x=snake[j].x-10;
        }}
            snake.map(x=>{
                ctx.fillStyle="green";
                ctx.fillRect(x.x, x.y, 40,40);
                
            })
}
            
            
            
        }},100)
        function keyDown (){
            if(l!=2&&l!=1){
                s=1
               
                let t=0;
                setInterval(()=>{
                    if(t<snake.length-1){
                        snake[t].y=snake[t].y+40;
    t=t+1;
                    }},100)
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);      
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            l=1;
            }
        }
        function keyRight(){
            if(l!=3&&l!=0){
                s=1
                let t=0;
                setInterval(()=>{
                    if(t<snake.length-1){
                        snake[t].x=snake[t].x+40;
    t=t+1;
                    }},100)
            console.log("right")
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            l=0;
            }
        }
        function keyUp(){
            if(l!=1&&l!=2){
                s=1
                let t=0;
                setInterval(()=>{
                    if(t<snake.length-1){
                        snake[t].y=snake[t].y-40;
    t=t+1;
                    }},100)
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);      
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            l=2;
            }
        }
        function keyleft(){
            if(l!=0&&l!=3){
                let o=1;
                s=1
                for(let h=0;h<snake.length;h++){
                    snake[h].x=snake[h].x-40;
                }
                let t=0;
                setInterval(()=>{
                    if(t<snake.length-1){
                        snake[t].x=snake[t].x-40;
    t=t+1;
                    }},100)
            console.log("left")
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            l=3;
            }
        }
         function keySpace (){
         location.reload();
        }
        let KEY_CODE = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32,
            W: 87,
            A: 65,
            D: 68,
            S: 83
         };
        
        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
               case KEY_CODE.LEFT:
                keyleft();
                  break;
               case KEY_CODE.RIGHT:
                  keyRight();
                  break;
               case KEY_CODE.DOWN:
                  keyDown()
                  break;
               case KEY_CODE.UP:
                keyUp();
                  break;
               case KEY_CODE.SPACE:
                    keySpace();
                    break;
                case KEY_CODE.W:
                    keyUp();
                    break;
                case KEY_CODE.A:
                    keyleft();
                    break;
                case KEY_CODE.D:
                    keyRight();
                    break;
                case KEY_CODE.S:
                    keyDown();
                    break;
               default:
                  break;
            }
         });
     
        
    }
}