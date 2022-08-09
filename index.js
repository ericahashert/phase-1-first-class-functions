function receivesAFunction(breakfast) {
    exercise();
    breakfast();
}

function exercise() {
    return "It's hard, but you have to do it";
}

function breakfast() {
    return "The best part of my morning!"
}

function returnsANamedFunction () {
    return function nikkoBear () {
        "Is your dog a good boy? He's the best boy."
    }
}

function returnsAnAnonymousFunction () {
    return function () {
            "Is your dog a good boy? He's the best boy."
    }
}