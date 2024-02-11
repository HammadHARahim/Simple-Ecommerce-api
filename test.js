const arr1 = [1, 2, 3, 4, 5];

const len = arr1.length;

console.log(len);

// for (let i = 0; i < len; i++) {
// 	console.log(arr1[i]);

// }
while (len) {
	len++;
	console.log(len);
	break;
}
