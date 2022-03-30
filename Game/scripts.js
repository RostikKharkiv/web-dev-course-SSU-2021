player = document.querySelector(".player");

health = 3;

createEnemy();

document.addEventListener('keydown', function (event) {

    switch (event.keyCode) {
        case 83:
            if (player.offsetTop + 50 > document.body.clientHeight - 200) {

            } else {
            player.style.top = player.offsetTop + 50 + "px";
            }
            break;
        case 87 :
            if (player.offsetTop - 50 < 0) {

            } else {
            player.style.top = player.offsetTop - 50 + "px";
            }
            break;
        case 32:
            createBullet();
            break;
    }

})

function createBullet() {
    let bullet = document.createElement("div");
    console.dir(bullet);
    bullet.className = "bullet";
    bullet.style.top = player.offsetTop + 100 + "px";
    document.body.appendChild(bullet);

    bulletMove(bullet);

}

function bulletMove(bullet) {
    let timerId = setInterval(function() {
        bullet.style.left = bullet.offsetLeft + 10 + "px";

        isShot(bullet, timerId);

        if (bullet.offsetLeft > document.body.clientWidth) {
            bullet.remove();
            clearInterval(timerId);
        }
    }, 10);
}

function isShot(bullet, timer) {
    let topBullet = bullet.offsetTop;
    let bottomBullet = bullet.offsetTop + bullet.clientHeight;

    let enemy = document.querySelector(".enemy");
    
    if (enemy != null) {
        let topEnemy = enemy.offsetTop;
        let bottomEnemy = enemy.offsetTop + enemy.clientHeight;
        
        let leftBullet = bullet.offsetLeft;
        let leftEnemy = enemy.offsetLeft;

        if (topBullet >= topEnemy && topBullet <= bottomEnemy && leftBullet >= leftEnemy) {
            console.dir(enemy);
            enemy.className = "boom";
            enemy.style.top = (topEnemy - 50) + "px";
            enemy.style.left = (leftEnemy - 50) + "px";
            clearInterval(enemy.dataset.timer);
            setTimeout(function() {
                enemy.remove();
                bullet.remove();
                clearInterval(timer);
                createEnemy();
            }, 1000)
        }
    }    

}

function createEnemy() {
    let enemy = document.createElement("div");
    enemy.className = "enemy";
    enemy.style.top = random(200, document.body.clientHeight - 200) + "px";
    document.body.appendChild(enemy);
    
    

    let timerId = setInterval(function() {
        enemy.style.left = enemy.offsetLeft - 10 + "px";
        if (enemy.offsetLeft + enemy.clientWidth < 0) {
            enemy.remove();
            clearInterval(timerId);
            hitPlayer();
        }
        isHit();
    }, 100);
    enemy.dataset.timer = timerId;
}

function hitPlayer() {
    health--;

    if (health != 0) {
    let healthBlock = document.querySelector("#health");
    let oneHealth = healthBlock.querySelector("span");
    oneHealth.remove();
    } else {
        endGame();
    }
}

function isHit() {
    let enemy = document.querySelector(".enemy");

    if (enemy.offsetTop > player.offsetTop && 
        enemy.offsetTop < player.offsetTop + player.clientHeight && 
        enemy.offsetLeft <= player.offsetLeft + player.clientWidth) {
            enemy.className = "boom";
            enemy.style.top = (player.offsetTop) + "px";
            enemy.style.left = (player.offsetLeft) + "px";
            clearInterval(enemy.dataset.timer);
            setTimeout(function() {
                enemy.remove();
            }, 1000)
            createEnemy();
            hitPlayer();
        }
}

function endGame() {
    document.body.innerHTML = "";
    let gameover = document.createElement("div");
    gameover.className = "gameover";
    let body = document.querySelector("body");
    body.style.background = "url(images/gameover.jpg)";
}

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }