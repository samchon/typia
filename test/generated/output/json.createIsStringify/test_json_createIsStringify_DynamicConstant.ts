import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_isStringify_DynamicConstant = _test_json_isStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: DynamicConstant): string | null => {
        const is = (input: any): input is DynamicConstant => {
            return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).a &&
                Number.isFinite((input as any).a) &&
                "number" === typeof (input as any).b &&
                Number.isFinite((input as any).b) &&
                "number" === typeof (input as any).c &&
                Number.isFinite((input as any).c) &&
                "number" === typeof (input as any).d &&
                Number.isFinite((input as any).d)
            );
        };
        const stringify = (input: DynamicConstant): string => {
            const $number = (typia.json.createIsStringify as any).number;
            return `{"a":${$number((input as any).a)},"b":${$number(
                (input as any).b,
            )},"c":${$number((input as any).c)},"d":${$number(
                (input as any).d,
            )}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    DynamicConstant.SPOILERS,
);
