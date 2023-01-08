function getOVA (relateStatic){
    var ova = 0
    relateStatic.forEach(element => {
        ova+=element
    });
    return Math.ceil(ova / relateStatic.length)
}

exports.getOVA = getOVA;