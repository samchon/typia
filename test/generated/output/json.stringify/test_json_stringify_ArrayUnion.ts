import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_stringify_ArrayUnion = _test_json_stringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: Array<ArrayUnion.IUnion>): string => {
            const $string = (typia.json.stringify as any).string;
            const $number = (typia.json.stringify as any).number;
            const $throws = (typia.json.stringify as any).throws;
            const $sp0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return "[]";
                const arrayPredicators = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $string(elem))
                                .join(",")}]`,
                    ],
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            `[${entire.map((elem: any) => elem).join(",")}]`,
                    ],
                    [
                        (top: any): any => "number" === typeof top,
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $number(elem))
                                .join(",")}]`,
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                $throws({
                    expected:
                        "(Array<string> | Array<boolean> | Array<number>)",
                    value: input,
                });
            };
            return `[${input.map((elem: any) => $sp0(elem)).join(",")}]`;
        })(input),
);
