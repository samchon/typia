import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createIsParse_DynamicConstant = _test_isParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: any): typia.Primitive<DynamicConstant> => {
        const is = (input: any): input is DynamicConstant => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.a &&
                Number.isFinite(input.a) &&
                "number" === typeof input.b &&
                Number.isFinite(input.b) &&
                "number" === typeof input.c &&
                Number.isFinite(input.c) &&
                "number" === typeof input.d &&
                Number.isFinite(input.d);
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    DynamicConstant.SPOILERS,
);
