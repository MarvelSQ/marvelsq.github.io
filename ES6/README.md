# ES6

## 箭头函数
有效解决this的指向问题
```js
()=>{}
```

## let
```js
for(var i = 0;i<10;i++){
  velements[i].addEventListener(function(){
    console.log('index is '+i)
    })
}

for(let l = 0;l<10;l++){
  lelements[l].addEventListener(()=>{
    console.log('index is '+l)
    })
}

elements[7].click()
// 10
// 本应该是7
// 但是显示 10

//使用let后
lelement[8].click()
// 8
```
