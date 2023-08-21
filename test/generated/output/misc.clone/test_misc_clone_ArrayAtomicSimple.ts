import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_misc_clone_ArrayAtomicSimple = _test_misc_clone(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    ((input: ArrayAtomicSimple): typia.Primitive<ArrayAtomicSimple> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $cp2 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) &&
            input.length === 3 &&
            Array.isArray(input[0]) &&
            input[0].every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input[1]) &&
            input[1].every((elem: any) => "number" === typeof elem) &&
            Array.isArray(input[2]) &&
            input[2].every((elem: any) => "string" === typeof elem)
            ? ([
                  Array.isArray(input[0]) ? $cp0(input[0]) : (input[0] as any),
                  Array.isArray(input[1]) ? $cp1(input[1]) : (input[1] as any),
                  Array.isArray(input[2]) ? $cp2(input[2]) : (input[2] as any),
              ] as any)
            : (input as any);
    })(input),
);
