import benchmark from "benchmark";
import typia from "typia";

interface ISmallStrings {
    /**
     * @minLength 1000
     * @maxLength 1000
     * @minItems 4000
     * @maxItems 4000
     */
    values: string[];
}

const STR_ESCAPE =
    /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;

const optimized = (str: string): string => {
    return STR_ESCAPE.test(str) === false
        ? '"' + str + '"'
        : JSON.stringify(str);
};

console.log(`Limit | Native | Optimized | Gap`);
console.log("-----:|-------:|----------:|----:");

const data: string[] = typia.random<ISmallStrings>().values;
for (let i: number = 10; i <= 1_000; i += i < 100 ? 10 : 100) {
    const shrinked: string[] = data.map((str) => str.substring(0, i));
    const suite = new benchmark.Suite();
    suite.add("native", () => shrinked.forEach((str) => JSON.stringify(str)));
    suite.add("optimized", () => shrinked.forEach(optimized));
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
