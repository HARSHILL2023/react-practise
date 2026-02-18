//function in typescript  javascript

function add (x: number,y :number)
{
    return(
        x+y
    )
}
console.log(add(1,2))


const multiply= (x:number,y:number) =>{
    return(x*y)


}
console.log(multiply(12,12));


//default value to provide  in function


function addd (x: number = 12,y :number = 10)
{
    return(
        x+y
    )

}
console.log(addd())