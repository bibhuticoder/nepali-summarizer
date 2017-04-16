$("#summarize").click(function(){  
 summarize($("#input").val());
})

function summarize(input){  
  var summary = get_summary(input);
  $("#output").text(summary);

  var previousLength = input.length;
  var presentLength = summary.length;

  $("#prev").text("पहिले को  length : " + previousLength + ", " + calculateWords(input) + " शब्दहरु ");
  $("#pres").text("Summary को length : " + presentLength + ", " + calculateWords(summary) + " शब्दहरु ");
}

function calculateWords(input){
  var words = 0;
  var paragraphs = split_into_paragraphs(input);
  if(paragraphs.length > 0){
    for(var i=0; i<paragraphs.length; i++){
      var p = paragraphs[i];
      var w = p.split(" ").length; 
      words += w;
    }
  }else{
    return(input.split(" ").length);
  }
  return words;
}