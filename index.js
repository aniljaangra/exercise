
var promise1 = ()=>new Promise(function(res , rej){
    setTimeout(function(){
 console.log( "Processing",1 );
         res(1);
    },1500);
})


var promise2 =  ()=>new Promise(function(res , rej){
    setTimeout(function(){
 console.log( "Processing",2 );        res(2);
    },500);
})

var promise3 =  ()=>new Promise(function(res , rej){
    setTimeout(function(){
 console.log( "Processing",3 );        res(3);
    },1000);
})
function serialEx(list){
    return list.reduce((cur, next) => cur.then(next), Promise.resolve())
}


var list = [ promise1 , promise2 , promise3];

serialEx( list)
.then(() => { console.log('Yayyyy')})

return;

const concat = list => Array.prototype.concat.bind(list)
const promiseConcat = f => x => f().then(concat(x))
const promiseReduce = (acc, x) => acc.then(promiseConcat(x))
/*
 * serial executes Promises sequentially.
 * @param {funcs} An array of funcs that return promises.
 * @example
 * const urls = ['/url1', '/url2', '/url3']
 * serial(urls.map(url => () => $.ajax(url)))
 *     .then(console.log.bind(console))
 */
const serial = funcs => funcs.reduce(promiseReduce, Promise.resolve([]))

// execute them serially
serial(list)
    .then(console.log.bind(console))

return ;

var p = Promise.resolve();
list.forEach(function(item,index){
    // console.log( "Processing",index );
    p = p.then( (ouput)=> { console.log(ouput);return item })
})
p.then(function(data){
    console.log("completed",data)
})
return

list = list.reduce(function( prev , current , index ){

    return prev.then(current)
},Promise.resolve())

console.log(list)

var lis = [1,2,3]

lis = lis.reduce( ( pre , cur)=> cur + pre , 0)
console.log(lis)
return;

list.reduce((cur, next) => cur.then(next), Promise.resolve()).then(() => { console.log('Yayyyy')})

return;
// Promise.all()
then(function(result){
    console.log("resolved all")
})


return;

class Promise1{
    
    constructor( handler ){
        console.log(handler.toString());
        this.handler = handler;
    }

    then( resolve , reject ){
        var output;
        var _resolve = function(output){
            return output;
        };
        this.handler( function(value){
             console.log("then called");
            output = resolve(value);
            _resolve(output);
        });
        var handler = function( resolve , reject){
            __resolve(resolve(value));
        };
        return new Promise(handler);
    }
}

var promise = new Promise(function( resolve , reject ){
    setTimeout( function(){
        resolve(4);
    },100);
})

promise
.then(function(item){
    console.log(item);
    return 5;
}).then(function(item){
    console.log(item);
})


