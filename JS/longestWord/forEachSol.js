

function LongestWord(sen) { 

    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
    
    let longest = ""
  
    var arr = sen.split(" ").forEach(word => {
        if(word.length > longest.length) longest = word;
    })
  
    return longest;
    }

    const sentence = 'Find the longlongword l!l.n@g.e!!s!t word'

    console.log(LongestWord(sentence));