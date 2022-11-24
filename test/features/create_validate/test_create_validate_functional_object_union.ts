import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_functional_object_union = _test_validate(
    "functional union object",
    FunctionalObjectUnion.generate,
    TSON.createValidate<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);
