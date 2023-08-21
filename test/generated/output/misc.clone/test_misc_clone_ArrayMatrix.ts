import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_clone_ArrayMatrix = _test_misc_clone(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
    ((input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) =>
            input.map((elem: any) =>
                Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
        const $cp2 = (input: any) =>
            input.map((elem: any) =>
                Array.isArray(elem) ? $cp1(elem) : (elem as any),
            );
        return Array.isArray(input) ? $cp2(input) : (input as any);
    })(input),
);
