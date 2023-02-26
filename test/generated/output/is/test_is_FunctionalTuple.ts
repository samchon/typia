import typia from "../../../../src";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalTuple = _test_is(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) =>
        ((input: any): input is FunctionalTuple => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "function" === typeof input[0] &&
                "function" === typeof input[1] &&
                "function" === typeof input[2]
            );
        })(input),
    FunctionalTuple.SPOILERS,
);
