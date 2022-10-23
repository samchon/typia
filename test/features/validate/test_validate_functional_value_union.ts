import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_value_union = _test_validate(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.validate(input),
    FunctionalValueUnion.SPOILERS,
);
