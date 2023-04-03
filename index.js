function receivesAFunction(callback) {
    callback()
}
receivesAFunction(function(){
})

function returnsANamedFunction() {
    return function named() {
    }
}
    
function returnsAnAnonymousFunction() {
    return function(){
        
    }
}