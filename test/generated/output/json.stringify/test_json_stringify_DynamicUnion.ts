import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_stringify_DynamicUnion = _test_json_stringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) =>
        ((input: DynamicUnion): string => {
            const $join = (typia.json.stringify as any).join;
            const $string = (typia.json.stringify as any).string;
            const $number = (typia.json.stringify as any).number;
            const $so0 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        if (RegExp(/^-?\d+\.?\d*$/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (
                            RegExp(
                                /^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/,
                            ).test(key)
                        )
                            return `${JSON.stringify(key)}:${$number(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
);
