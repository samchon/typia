import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_stringify_DynamicSimple = _test_stringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: DynamicSimple): string => {
            const $join: any = (typia.stringify as any).join;
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$number(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
);
