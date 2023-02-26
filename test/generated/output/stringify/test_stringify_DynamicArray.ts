import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicArray = _test_stringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) =>
        ((input: DynamicArray): string => {
            const $join = (typia.stringify as any).join;
            const $string = (typia.stringify as any).string;
            const $so0 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${`[${value
                            .map((elem: any) => $string(elem))
                            .join(",")}]`}`;
                    })
                    .filter((str) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
);
