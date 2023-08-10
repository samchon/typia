import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_is_ArrayMatrix = _test_is<ArrayMatrix>(ArrayMatrix)((input) =>
    ((input: any): input is ArrayMatrix => {
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
    })(input),
);
