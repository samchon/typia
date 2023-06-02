import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createStringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: DynamicConstant): string => {
        const $number: any = (typia.createStringify as any).number;
        const $so0: any = (input: any): any =>
            `{"a":${$number(input.a)},"b":${$number(input.b)},"c":${$number(
                input.c,
            )},"d":${$number(input.d)}}`;
        return $so0(input);
    },
);
