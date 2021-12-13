console.log(countChar("kakkerlak", "k"));
function countChar(string, character) 
{
    let stringCounter = 0;
    let letterCounter = 0;
    while(stringCounter < string.length) 
    {
        if(string[stringCounter] == character) 
        {
            letterCounter += 1;
            stringCounter += 1;
        }
        else 
        {
            stringCounter += 1;
        }
    }
    return(letterCounter);
}
