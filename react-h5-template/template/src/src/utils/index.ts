// @ts-nocheck
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result;

    const later = function () {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp;

        // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function (...args) {
        context = this;
        timestamp = +new Date();

        const callNow = immediate && !timeout;
        // 如果延时不存在，重新设定延时

        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);

            context = args = null;
        }
        return result;
    };
}

/**
 * @param {Function} fn - 需要节流的函数。
 * @param {number} delay - 执行函数的最小时间间隔（毫秒）。
 * @param {boolean} [firstTime=true] - 是否在首次触发时立即执行函数。
 * @returns {Function} - 返回一个具有节流特性的新函数。
 */
export function throttle(fn, delay, firstTime = true) {
    let begin = 0;
    return function (...args) {
        let now = Date.now();

        if (firstTime) {
            fn.apply(this, args);
            firstTime = false;
            begin = now;
        } else {
            if (now - begin > delay) fn.apply(this, args);
            begin = now;
        }
    };
}

export function deepClone(obj) {
    if (typeof obj !== 'object') return;
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        // hasOwnProperty避免拷原型链内容
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
        }
    }

    return newObj;
}

/**
 * 加载JS脚本 如https://形式
 * @param  {string} src
 * @returns  {Promise}
 */
export function loadScript(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = () => {
            console.log('Script loaded successfully.');
            resolve();
        };
        script.onerror = () => {
            console.error('Error loading the script.');
            reject();
        };
        document.head.appendChild(script);
    });
}

/**
 * 获取URL中的查询参数。
 * @param {string} variable 要获取的查询参数的名称。
 * @returns {string} 查询参数的值或空字符串。
 */
export function getQuery(variable: string): string {
    // 获取当前URL中的查询字符串部分（即问号后面的部分）
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    // 遍历数组中的每个元素
    for (let i = 0; i < vars.length; i++) {
        // 把当前元素按照=符号分割成键和值
        const pair = vars[i].split('=');
        if (pair[0] == variable) return pair[1];
    }
    return '';
}

/**
 * 将URL查询字符串转换为对象。
 *
 * @param {string} url - 要解析的URL，默认为当前窗口的URL。
 * @returns {Object} - 一个键值对的对象，其中键和值都是字符串。
 */
export function paramToObj(url: string = window.location.href): { [key: string]: string } {
    // 解码URL并尝试分割以获取查询字符串部分。
    // 如果URL中没有查询字符串，则split('?')[1]将是undefined。
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ');

    if (!search) return {};

    const obj: { [key: string]: string } = {};

    const searchArr = search.split('&');

    searchArr.forEach((v) => {
        const index = v.indexOf('=');

        if (index !== -1) {
            const name = v.substring(0, index);
            const val = v.substring(index + 1, v.length);
            obj[name] = val;
        }
    });

    return obj;
}

/**
 * 判断当前设备的操作系统。
 *
 * 该方法通过检测用户代理字符串来判断设备是否运行安卓或iOS系统。
 * 如果无法确定设备类型，将返回 '未知系统'。
 *
 * @returns {string} - 返回 'android', 'iOS' 或 'unknown' 来表示设备的操作系统类型。
 */
export function detectDeviceOS(): string {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 检测是否为iOS设备
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    // 检测是否为安卓设备
    if (/android/i.test(userAgent)) {
        return 'android';
    }

    // 如果上述条件都不满足，则返回 'unknown'
    return 'unknown';
}

/**
 * 根据给定的值在字典数组中查找对应的文本。
 *
 * @param {string} value - 要查找的值。
 * @param {Array} Dict - 包含字典项的数组，每个字典项应该是一个对象，包含 `value` 和 `text` 属性。
 * @returns {string} - 返回匹配的字典项的 `text` 属性。如果没有找到匹配项，返回 '未知字典值'。
 *
 */
export function getDictText(value, dict) {
    const item = dict.find((item) => item.value === value);
    return item ? item.text : '未知字典值';
}
