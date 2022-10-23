import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_tuple = _test_validate(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.validate(input),
    FunctionalTuple.SPOILERS,
);
