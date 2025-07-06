function show({a,b,c , ...res}) {
    console.log(a, b ,c);
    console.log(res);
}

const showArrow = ({a , b ,c}) => {
    console.error(a, b ,c);
}

show({a: 4 , b: 5 , c: 8 , res: 4 }) ;
showArrow({a: 4 , b: 5 , c: 8})

const array = [2 , 4 , 6 , 7]

const object = {
    "names": "A",
    "age": 20 ,
    "address": "A" 
}

const [a,b,...res] = array
console.log(a,b , res);

const {age , ...ob} = object
console.log(age , ob);