
        let newarr = [10, 4,  3, 50, 23, 90];
        let max = max2 = max3 = newarr[0];
        for(let i = 0; i < newarr.length; i++){
            if(newarr[i] > max){
                console.log("Here i max", newarr[i], max, max2, max3)
                max3 = max2;
                max2 = max;
                max = newarr[i];
                console.log("Here After max", newarr[i], max, max2, max3)
            }
            else if(newarr[i] > max2){
                console.log("Here i max2", newarr[i], max, max2, max3)
                max3 = max2;
                max2 = newarr[i];
                console.log("Here After max2", newarr[i], max, max2, max3)

            }
            else if(newarr[i] > max3){
                console.log("Here i max3", newarr[i], max, max2, max3)
                max3 = newarr[i];
                console.log("Here After max3", newarr[i], max, max2, max3)

            }
        }
        console.log("first largest elements is",max);
        console.log("second largest elements is",max2);
        console.log("third largest elements is",max3);

    