
var promise1 = ()=>new Promise(function(res , rej){
    setTimeout(function(){
        console.log( "Processing",1 );
         res(1);
    },1500);
})


var promise2 =  ()=>new Promise(function(res , rej){
    setTimeout(function(){
        console.log( "Processing",2 );        
        res(2);
    },500);
})

var promise3 =  ()=>new Promise(function(res , rej){
    setTimeout(function(){
        console.log( "Processing",3 );        
        res(3);
    },1000);
})

function serial(list){
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
