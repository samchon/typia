import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_functional_value_union = _test_validate(
    "functional union value",
    FunctionalValueUnion.generate,
    TSON.createValidate<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
