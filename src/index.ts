import an23 from '@mmstudio/an000023';
import an22 from '@mmstudio/an000022';
import FormData from 'form-data';
import fetch from 'node-fetch';

/**
 * 是否为违法图片
 * @param headers
 * @param file 要检测的图片文件地址
 * @returns true 违法图片 false 正常图片
 */
export default async function check(file: string) {
	const token = await an22();
	const r23 = await an23(file);
	const form = new FormData();
	form.append(r23.name, r23.data, {
		filename: r23.name
	});
	const url = `https://api.weixin.qq.com/wxa/img_sec_check?access_token=${token}`;
	const res = await fetch(url, {
		body: form,
		method: 'POST'
	});
	if (res.status > 0 && res.status < 300) {
		const result = await res.json() as {
			errcode: number;
			errMsg: string;
		};
		// if (result.errcode !== 0) {
		return result.errcode === 87014;
		// throw new Error(result.errMsg);
		// }
	}
	throw new Error(res.statusText);

}
