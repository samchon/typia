import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_stringify_DynamicTree = _test_json_stringify(
    "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
    ((input: DynamicTree): string => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.sequence &&
            "object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children) &&
            $io1(input.children);
        const $io1 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/(.*)/).test(key))
                    return (
                        "object" === typeof value &&
                        null !== value &&
                        $io0(value)
                    );
                return true;
            });
        const $string = (typia.json.stringify as any).string;
        const $number = (typia.json.stringify as any).number;
        const $join = (typia.json.stringify as any).join;
        const $so0 = (input: any): any =>
            `{"id":${$string(input.id)},"sequence":${$number(
                input.sequence,
            )},"children":${$so1(input.children)}}`;
        const $so1 = (input: any): any =>
            `{${Object.entries(input)
                .map(([key, value]: [string, any]) => {
                    if (undefined === value) return "";
                    return `${JSON.stringify(key)}:${$so0(value)}`;
                })
                .filter((str: any) => "" !== str)
                .join(",")}}`;
        return $so0(input);
    })(input),
);
