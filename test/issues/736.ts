import benchmark from "benchmark";
import typia from "typia";

import { $string } from "typia/lib/functional/$string";

interface ISmallStrings {
    /**
     * @minLength 5
     * @maxLength 5
     * @minItems 4000
     * @maxItems 4000
     */
    values: string[];
}

const features: Record<string, (str: string) => string> = {
    previous: (str: string): string => {
        const length = str.length;
        if (length > 41) return JSON.stringify(str);

        let result = "";
        let last = 0;
        let found = false;
        let surrogateFound = false;
        let point = 255;

        // eslint-disable-next-line
        for (let i = 0; i < length && point >= 32; i++) {
            point = str.charCodeAt(i);
            if (0xd800 <= point && point <= 0xdfff) {
                // The current character is a surrogate.
                surrogateFound = true;
                break;
            }
            if (point === 34 || point === 92) {
                result += str.slice(last, i) + "\\";
                last = i;
                found = true;
            }
        }

        if (!found) {
            result = str;
        } else {
            result += str.slice(last);
        }
        return point < 32 || surrogateFound === true
            ? JSON.stringify(str)
            : `"${result}"`;
    },
    advanced: $string,
};

const data: string[] = typia.random<ISmallStrings>().values;
const suite = new benchmark.Suite();
for (const [key, value] of Object.entries(features)) {
    suite.add(key, () => data.forEach(value));
}
suite.run();

suite.forEach((elem: benchmark) => {
    const count: number = elem.hz * elem.times.elapsed;
    console.log(elem.name, count);
});
