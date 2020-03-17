const test = require('ava');

const { default: a } = require('../dist/index');

test('微信-是否为违法图片', async (t) => {
	const flag = await a(`http://127.0.0.1:8889/getfile?id=06e75b24-0152-4fdb-8572-9c23a97396b2&download`);
	t.is(flag, false);
});
