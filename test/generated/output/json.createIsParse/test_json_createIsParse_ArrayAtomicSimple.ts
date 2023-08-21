import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_isParse_ArrayAtomicSimple = _test_json_isParse(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
    (input: any): typia.Primitive<ArrayAtomicSimple> => {
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
