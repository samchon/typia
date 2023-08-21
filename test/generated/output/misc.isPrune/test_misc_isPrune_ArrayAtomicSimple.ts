import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_misc_isPrune_ArrayAtomicSimple = _test_misc_isPrune(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    ((input: any): input is ArrayAtomicSimple => {
        const is = (input: any): input is ArrayAtomicSimple => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                Array.isArray(input[0]) &&
                input[0].every((elem: any) => "boolean" === typeof elem) &&
                Array.isArray(input[1]) &&
                input[1].every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input[2]) &&
                input[2].every((elem: any) => "string" === typeof elem)
            );
        };
        const prune = (input: ArrayAtomicSimple): void => {};
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
