import benchmark from "benchmark";
import typia from "typia";

interface ISmallStrings {
    /**
     * @minLength 998
     * @maxLength 998
     * @minItems 4000
     * @maxItems 4000
     */
    values: string[];
}

const STR_ESCAPE =
    /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;

const optimized =
    (limit: number) =>
    (str: string): string => {
        const length = str.length;
        if (length > limit) {
            return STR_ESCAPE.test(str) === false
                ? '"' + str + '"'
                : JSON.stringify(str);
        }

        let result = "";
        let last = -1;
        let point = 255;

        // eslint-disable-next-line
        for (let i = 0; i < length; ++i) {
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
    };

console.log(`Limit | Native | Optimized | Gap`);
console.log("-----:|-------:|----------:|----:");

const data: string[] = typia.random<ISmallStrings>().values;
for (let i: number = 10; i <= 1_000; i += i < 100 ? 10 : 100) {
    const shrinked: string[] = data.map(
        (str) => `"${str.substring(0, i - 2)}"`,
    );
    const suite = new benchmark.Suite();
    suite.add("native", () => shrinked.forEach((str) => JSON.stringify(str)));
    suite.add("optimized", () => shrinked.forEach(optimized(i)));
    suite.run();

    const result = Object.fromEntries(
        suite.map((elem: benchmark) => {
            const count: number = elem.hz * elem.times.elapsed;
            return [elem.name, count] as const;
        }),
    );
    const ratio = result.optimized / result.native - 1;
    console.log(
        [
            `#${i.toLocaleString()}`,
            Math.round(result.native).toLocaleString(),
            Math.round(result.optimized).toLocaleString(),
            Math.round(ratio * 10000) / 100 + " %",
        ].join(" | "),
    );
}
