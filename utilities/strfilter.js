function outQoute(str) {
	const obj = JSON.stringify(str);
	return obj.replace(/"/g, '');
}

// console.log(outQoute('65aaa13a4e717cd17c437d35'));
module.exports = outQoute;
