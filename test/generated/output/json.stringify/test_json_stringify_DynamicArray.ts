import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_stringify_DynamicArray =
    _test_json_stringify<DynamicArray>(DynamicArray)((input) =>
        ((input: DynamicArray): string => {
            const $io1 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            Array.isArray(value) &&
                            value.every((elem: any) => "string" === typeof elem)
                        );
                    return true;
                });
            const $join = (typia.json.stringify as any).join;
            const $string = (typia.json.stringify as any).string;
            const $so0 = (input: any): any => `{"value":${$so1(input.value)}}`;
            const $so1 = (input: any): any =>
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
        })(input),
    );
