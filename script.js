let array = ['ffloklwer', 'ff5low', 'fflight'];
function commonWord(arrays) {
    if (arrays.length > 1) {

        let fastWord = arrays[0].split('');
        let array = [];
        let fastWordCheck = '';
        let result = 0;
        let arrayConvert;
        let c = 0;
        let v = 0;
        for (let i = 0; i < fastWord.length; i++) {
            fastWordCheck = fastWord[i];
            //  if(i < arrays.length){
            for (v = 0; v < arrays.length;) {
                arrayConvert = arrays[v].split('');
                for (let o = c; o < arrayConvert.length; o++) {
                    if (((fastWordCheck === arrayConvert[o]) !== false) && o === i) {
                        result += 1;
                        if (result === arrays.length) {
                            array.push(fastWordCheck)
                            result = 0;
                        }

                    } else {
                        if (v < arrays.length - 1) {
                            v = v + 1;
                            o = arrayConvert.length;
                        } else {
                            v = arrays.length;
                            o = arrayConvert.length;
                        }

                    }
                    // console.log(fastWordCheck === arrayConvert[o]? arrayConvert[o] : arrayConvert[o],arrayConvert,v,result);

                }
            }

            if (c < arrays.length) {
                c += 1;
            }
            if (c < arrays.length) {
                v = 0;
            }
        }


        // console.log(array)
        // console.log(result);
        return array.join('')
    }
    else {
        return arrays.join('');
    }
}

console.log(commonWord(array))

