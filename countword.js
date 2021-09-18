const str = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
var word = ["love"];

function countWords(str,word)
    {  
    let a = str.split(" ");

    let count = 0;
    for (let i = 0; i < a.length; i++)
    {
    if (word==(a[i]))
        count++;
    }
    return count;
    }

    console.log(countWords(str, word));


