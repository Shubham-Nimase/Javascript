
function ShowStar(rows)
{
    for(let i=1; i<=rows; i++)
    {
        var pattern='';
         for(let j=0;j<i; j++)
        pattern = pattern + '*';
        console.log(pattern);
    }
}

ShowStar(5);