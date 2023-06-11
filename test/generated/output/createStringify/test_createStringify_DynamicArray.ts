import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_createStringify_DynamicArray = _test_stringify(
    "DynamicArray",
    DynamicArray.generate,
    (input: DynamicArray): string => {
        const $join = (typia.createStringify as any).join;
        const $string = (typia.createStringify as any).string;
        const $so0 = (input: any): any =>
            `{${Object.entries(input)
                .map(([key, value]: [string, any]) => {
                    if (undefined === value) return "";
                    return `${JSON.stringify(key)}:${`[${value
                        .map((elem: any) => $string(elem))
                        .join(",")}]`}`;
                })
                .filter((str: any) => "" !== str)
                .join(",")}}`;
        return $so0(input);
    },
);
