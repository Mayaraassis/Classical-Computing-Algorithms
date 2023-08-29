export default function binary_search(list: number[], target: number): boolean {

    let lower= 0;
    let high = list.length;
    do {
        const m = Math.floor(lower + (high - lower)/2);
        const value = list[m];

        if(value === target){
            return true;
        }
        else if (value> target){
            high = m;
        }
        else {
            lower = m + 1;
        }
    } while (lower < high);
    return false;
}

// Test the binary_search function
const testList = [1, 3, 5, 7, 9];
const target1 = 5;
const target2 = 4;

console.log(`Searching for ${target1}: ${binary_search(testList, target1)}`);
console.log(`Searching for ${target2}: ${binary_search(testList, target2)}`);
