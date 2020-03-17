import an124 from '@dfeidao/fd-an000124';
import an128 from '@dfeidao/fd-an000128';
import FormData from 'form-data';
import fetch from 'node-fetch';

/**
 * 是否为违法图片
 * @param headers
 * @param file 要检测的图片文件地址
 * @returns true 违法图片 false 正常图片
 */
export default async function check(file: string) {
	const token = await an128();
	const ran124 = await an124(file);
	const form = new FormData();
	form.append(ran124.file_name, ran124.data, {
		filename: ran124.file_name
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
