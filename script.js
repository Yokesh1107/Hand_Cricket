let userInput
let score=0,computerInput,target=0,score1=0,flag=0
const player=(x)=>{
    const bat=document.getElementById('batOrBowl')
    const ver=document.getElementById('versus')
    const sc=document.getElementById('score')
    const wicket=document.getElementById('wic')
    const wol=document.getElementById('winorlose')
    const sco=document.getElementById('cps')
    sco.innerText=''
        wol.innerText=''
    if(flag==1){
       
        bat.innerText=''
        ver.innerText=''
        sc.innerText=''
        wicket.innerText=''
        computer(x)
        return 
    }else{
        bat.innerText='BATTING'
    const values=['1','2','3','4','5','6']
    const ran=Math.floor(Math.random()*6)
    computerInput=values[ran]
    userInput=x
    console.log(userInput+" vs "+computerInput)
    if(userInput==computerInput){
        wicket.innerText='Wicket!!!'
        target=score
        sc.innerText=`Target: ${target}`
        ver.innerText=''
        flag=1
        return
    }else{
        score+=Number(userInput)
        console.log(score)
        ver.innerText=`${userInput} vs ${computerInput}`
        sc.innerText=`Score: ${score}`
        
    }
}

}
const computer=(x)=>{
    const tar=document.getElementById('target')
    tar.innerText=`TARGET: ${target}`
    const bat=document.getElementById('batOrBowl')
        bat.innerText='BOWLING'
    const values=['1','2','3','4','5','6']
    const ran=Math.floor(Math.random()*6)
    computerInput=values[ran]
    userInput=x
    const ver=document.getElementById('versus')
    const sc=document.getElementById('score')
    console.log(computerInput+' vs '+userInput)
    if(userInput==computerInput){
        sc.innerText='WICKET!!!'
        ver.innerText=`${userInput} vs ${computerInput}`
        
        stopGame('l')
        return
    }
    else{
        score1+=Number(computerInput)
        console.log(score1)
        ver.innerText=`${userInput} vs ${computerInput}`
        sc.innerText=`Score: ${score1}`
    }
    if(score1>target){
        console.log('won')
        stopGame('w')
        return
    }
}
const stopGame=(x)=>{
    const sc=document.getElementById('winorlose')
    const sco=document.getElementById('cps')
    sco.innerText=`Computer score: ${score1} Player Score: ${score}`
    if(x=='l'){
        sc.innerText='WIN'
    }else{
        sc.innerText='LOSS'
    }
    const tar=document.getElementById('target')
    tar.innerText=''
    flag=0
    score=0
    score1=0


}
const stop=()=>{
    const bat=document.getElementById('batOrBowl')
    const ver=document.getElementById('versus')
    const sc=document.getElementById('score')
    const wicket=document.getElementById('wic')
    const wol=document.getElementById('winorlose')
    const tar=document.getElementById('target')
    const sco=document.getElementById('cps')
   sco.innerText=''
    tar.innerText=''
    bat.innerText=''
    ver.innerText=''
    sc.innerText=''
    wicket.innerText=''
    wol.innerText=''
    score=0
    score1=0
    flag=0
}





