import benchmark from "benchmark";
import typia from "typia";

interface ISmallStrings {
    /**
     * @minLength 41
     * @maxLength 41
     * @minItems 4000
     * @maxItems 4000
     */
    values: string[];
}

const features: Record<string, (str: string) => string> = {
    previous: (str: string): string => {
        if (str.length > 41) return JSON.stringify(str);

        const length = str.length;
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
    advanced: (str: string): string => {
        const len = str.length;
        let result = "";
        let last = -1;
        let point = 255;

        // eslint-disable-next-line
        for (let i = 0; i < len; ++i) {
            point = str.charCodeAt(i);
            if (point < 32) {
                return JSON.stringify(str);
            }
            if (point >= 0xd800 && point <= 0xdfff) {
                // The current character is a surrogate.
                return JSON.stringify(str);
            }
            if (
                point === 0x22 || // '"'
                point === 0x5c // '\'
            ) {
                last === -1 && (last = 0);
                result += str.slice(last, i) + "\\";
                last = i;
            }
        }

        return (
            (last === -1 && '"' + str + '"') ||
            '"' + result + str.slice(last) + '"'
        );
    },
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
