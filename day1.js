console.log('hello')

let a=3
let b='sun'
let c=65
console.log(a+c)
console.log(b)

b=87
console.log(b)

let student={
    roll : 34,
    branch :'cs'
};
console.log(student.roll)
console.log(student.branch)

let n=[23,6,87,6];
console.log(n)
console.log(n[2])
console.log(student['branch'])

console.log(2**3)
console.log(4>3)
console.log(8*4==20)

let j=43
let r='43'
console.log(j==r)
console.log(j===r)

let d=(j>34)?console.log('yes'):console.log('no')

console.log(3|2)     //bitwise
console.log(3&2)     //bitwise

if(j>4){
    console.log('hii')
}
else{
    console.log('hello')
}

switch(j){
    case 3: console.log('umm')
    break
    case 10: console.log('yeh')
    break
    default : console.log('oops')
}

for(let i=0;i<5;i++){
    console.log('hello world')
}

let m=9
let o=0
while(o<m){
    console.log(o)
    o++
}
