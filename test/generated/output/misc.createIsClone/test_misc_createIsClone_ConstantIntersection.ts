import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_misc_createIsClone_ConstantIntersection = _test_misc_isClone(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
    (input: any): typia.Resolved<ConstantIntersection> | null => {
        const is = (input: any): input is ConstantIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        };
        const clone = (
            input: ConstantIntersection,
        ): typia.Resolved<ConstantIntersection> => {
            return Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
                ? ([input[0] as any, input[1] as any, input[2] as any] as any)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
