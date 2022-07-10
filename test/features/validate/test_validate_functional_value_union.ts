import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_functional_value_union = _test_validate_for_of(
    "functional union value",
    FunctionalValueUnion.generate,
    (input) => TSON.validate(input),
    // UNABLE TO SPIL
);
