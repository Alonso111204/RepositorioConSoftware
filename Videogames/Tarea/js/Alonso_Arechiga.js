/*
 * Example functions to practice JavaScript
 *
 * Alonso Arechiga
 * 2026-02-22
 */

"use strict";

function firstNonRepeating(str){
    //Create an empty array to store the candidates
    const candidates = [];
    for(let i = 0; i<str.length; i++){
        let found= false;
        for(let cand of candidates){
            if(cand.char == str[i]){
                cand.count +=1;
                found=true;
            }
        }
        if(!found){
            candidates.push({char: str[i], count: 1})
        }
    }
    console.log(candidates);
    for(let index in candidates){
        if(candidates[index].count ==1){
            return candidates[index].char;
        }
    }
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}


function invertArray(arr){
    let invert= [];
    for(let i = arr.length-1; i>=0 ;i--){
        invert.push(arr[i]);
    }
    return invert;
}

function invertArrayInplace(arr){
    let invert= [];
    for(let i = arr.length-1; i>=0 ;i--){
        invert.push(arr[i]);
    }
    arr.length = 0;
    for(let i = 0; i<invert.length ;i++){
        arr.push(invert[i]);
    }

    return arr;
}

function capitalize(str){
    let result = "";
    for(let i= 0; i< str.length;i++){
        if(i == 0 || str[i-1] == " "){
            result+= str[i].toUpperCase();
        } 
        else {
            result+= str[i];
        }
    }

    return result;
}

function  mcd(x,y){
    while (y!==0){
        let result = x%y;
        x=y;
        y=result;
    }
    return x;
}

function hackerSpeak(str){
    let r= "";
    for(let i= 0; i<str.length; i++){
        if (str[i] == "a"){
            r+= "4";
            continue;
        }
        else if (str[i] == "e"){
            r+= "3";
            continue;
        }
        else if (str[i] == "i"){
            r+= "1";
            continue;
        }
        else if (str[i] == "o"){
            r+= "0";
            continue;
        }
        else if (str[i] == "s"){
            r+= "5";
            continue;
        }
        else {
            r+=str[i];
        }
    }
    return r;
}

function factorize(str){
    let r=[];
    let n= 0;
    for(let i=1; i<=str; i++){
        if(str%i == 0){
            r[n]= i;
            n++;
        }
    }
    return r;
}

function deduplicate(arr){
    let r=[];
    let n= 0;
    let check= false;
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<r.length; j++){
            if(arr[i] == r[j]){
                check = true;
                break;
            }
        }

        if(check==false){
            r[n]=arr[i];
            n++;
        }

    }
    return r;
}

function findShortestString(arr){
    if(!arr[0]){
        return 0;
    }
    let leng= arr[0].length;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length<leng){
            leng=arr[i].length;
        }
    }
    return leng;
}

function isPalindrome(str){
    let leng= str.length-1;
    for(let i=0; i<leng;i++){
        if(str[i]!=str[leng]){
            return false;
        }
        leng--;
    }
    return true;
}

function sortStrings(arr){
    let r = arr;
    for(let i= 0; i< r.length- 1; i++) {
        for(let j = 0; j < r.length-1; j++) {
            if (r[j] > r[j+ 1]) {
                let c = r[j];
                r[j] = r[j+ 1];
                r[j+ 1] = c;
            }
        }
    }
    return r;
}

function stats(arr){
    let s=[];
    let sum=0;
    let m=0;
    let c1=0;
    let c2=0;
    if(!arr[0]){
        s[0]=0;
        s[1]=0;
        return s;
    }
    for(let i= 0; i<arr.length; i++){
        sum+=arr[i];
    }
    s[0]= sum/arr.length;
    for(let j= 0; j<arr.length; j++){
        for(let k=0; k<arr.length;k++){
            if(arr[j]==arr[k]){
                c2++;
            }
        }
        if(c1<=c2){
            m=arr[j];
            c1=c2;
        }
        c2=0;
    }
    s[1]=m;
    return s;
}

function popularString(arr){
    let m="";
    let c1=0;
    let c2=0;
    for(let i= 0; i<arr.length; i++){
        for(let j=0; j<arr.length;j++){
            if(arr[i]==arr[j]){
                c2++;
            }
        }
        if(c2 > c1){
            m=arr[i];
            c1=c2;
        }
        c2=0;
    }
    return m;
}

function isPowerOf2(num){
    let r= 0;
    while(num%2 == 0 && num!=0){
        num=num/2;
    }
    if(num==1){
        return true;
    }
    else{
        return false;
    }
}

function sortDescending(arr) {
    arr= bubbleSort(arr);
    let result= [];
    for (let i= arr.length-1; i>= 0;i--) {
        result.push(arr[i]);
    }
    return result;
}

export {
    firstNonRepeating,
    bubbleSort,
    invertArray,
    invertArrayInplace,
    capitalize,
    mcd,
    hackerSpeak,
    factorize,
    deduplicate,
    findShortestString,
    isPalindrome,
    sortStrings,
    stats,
    popularString,
    isPowerOf2,
    sortDescending,
};
