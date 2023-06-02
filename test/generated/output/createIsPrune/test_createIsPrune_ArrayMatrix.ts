import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createIsPrune_ArrayMatrix = _test_isPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input: any): input is ArrayMatrix => {
        const is: any = (input: any): input is ArrayMatrix => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        elem.every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) =>
                                        "number" === typeof elem &&
                                        Number.isFinite(elem),
                                ),
                        ),
                )
            );
        };
        const prune: any = (input: ArrayMatrix): void => {};
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ArrayMatrix.SPOILERS,
);
