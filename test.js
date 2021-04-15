class Test{
    constructor(x)
    {
     this.x=x
    }
    positive(){
        if(this.x>0)
        {
            console.log(this.x + " positive ")
        } else{
            console.log(this.x + " negative ")
        }
    }
    even(){
        if(this.x%2==0)
        {
            console.log(this.x + " even ")
        } else{
            console.log(this.x + " odd ")
        }
    }
    seven(){
        if(this.x%7==0)
        {
            console.log(this.x + " divisable ")
        } else{
            console.log(this.x + " not divisable ")
        }
    }
    buzz(){
        if(this.x%7==0||this.x%10==7)
        {
            console.log(this.x + " buzz ")
        } else{
            console.log(this.x + " not buzz")
        }
    }
    digits(){
        var a = 75
        var r = a%10
        var q = a/10
        q=Math.trunc(q)  
        console.log(r,q)
        console.log(q + r)
    }
}