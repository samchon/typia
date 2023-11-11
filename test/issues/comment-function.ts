import typia from "typia";

export interface IWrapper {
    /**
     * Compute two variables.
     *
     * @param x The first value
     * @param y The second value
     * @returns The result of computation
     */
    compute: (x: number, y: number) => number;
}

const article = typia.reflect.metadata<[IWrapper]>().components.objects[0];

console.log(
    article?.properties.find((p) => p.key.constants[0]?.values[0] === "compute")
        ?.description,
);
