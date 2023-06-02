import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_isPrune_ArrayAtomicSimple = _test_isPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) =>
        ((
            input: any,
        ): input is [Array<boolean>, Array<number>, Array<string>] => {
            const is: any = (
                input: any,
            ): input is [Array<boolean>, Array<number>, Array<string>] => {
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
            const prune: any = (
                input: [Array<boolean>, Array<number>, Array<string>],
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ArrayAtomicSimple.SPOILERS,
);
