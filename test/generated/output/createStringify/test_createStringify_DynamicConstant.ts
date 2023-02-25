import typia from "../../../../src";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: DynamicConstant): string => {
        const $number = (typia.createStringify as any).number;
        const $so0 = (input: any): any =>
            `{"a":${$number(input.a)},"b":${$number(input.b)},"c":${$number(
                input.c,
            )},"d":${$number(input.d)}}`;
        return $so0(input);
    },
);
