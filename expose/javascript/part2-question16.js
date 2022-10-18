for(let prop in statistics) {
    if((prop.charAt(0) == 'r') || (statistics[prop] % 2 == 1)) {
        console.log(prop);
    }
}