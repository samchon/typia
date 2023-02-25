import typia from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalArray = _test_is(
    "FunctionalArray",
    FunctionalArray.generate,
    (input: any): input is FunctionalArray => {
        return (
            Array.isArray(input) &&
            input.every((elem: any) => "function" === typeof elem)
        );
    },
    FunctionalArray.SPOILERS,
);
