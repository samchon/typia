import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_tuple = _test_validate(
    "functional tuple",
    FunctionalTuple.generate,
    TSON.createValidate<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
