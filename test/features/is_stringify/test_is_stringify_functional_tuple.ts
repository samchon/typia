import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_functional_tuple = _test_is_stringify(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.isStringify(input),
    FunctionalTuple.SPOILERS,
);
