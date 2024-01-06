player1_name =localStorage.getItem("name1")
player2_name =localStorage.getItem("name2")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+" :"
document.getElementById("player2_name").innerHTML=player2_name+" :"
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_q").innerHTML="QUESTION TURN: "+player1_name
document.getElementById("player_a").innerHTML="ANSWER TURN: "+player2_name
function send()
{
get_n1 = document.getElementById("n1").value 
get_n2 = document.getElementById("n2").value 
ans=parseInt(get_n1)*parseInt(get_n2)
q="<h4>"+get_n1+"x"+get_n2+"</h4>"
i= "<br>Answer : <input type='text' id='ibox'>"
b="<br><br><button class='btn btn-success' onclick='check()'>check</button>"
x=q+i+b
document.getElementById("output").innerHTML=x
document.getElementById("n1").innerHTML=""
document.getElementById("n2").innerHTML=""


}
qturn="player1"
aturn="player2"

function check()
{
get_answer=document.getElementById("ibox").value;
answer=get_answer.toLowerCase()
if(ans==get_answer)
{
  if(aturn=="player1")
  {
      player1_score=player1_score +1
      document.getElementById("player1_score").innerHTML= player1_score

  }
  else
  {
    player2_score=player2_score +1
      document.getElementById("player2_score").innerHTML= player2_score
  }
}
if(qturn=="player1")
{
    qturn="player2"
    document.getElementById("player_q").innerHTML= "Question turn -"+player2_name

}
else
{
    qturn="player1"
    document.getElementById("player_q").innerHTML= "Question turn -"+player1_name
}
if(aturn=="player1")
{
    aturn="player2"
    document.getElementById("player_a").innerHTML= "Answer turn -"+player2_name

}
else
{
    aturn="player1"
    document.getElementById("player_a").innerHTML= "Answer turn -"+player1_name
}
document.getElementById("output").innerHTML=""

}