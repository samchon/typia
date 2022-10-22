import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_object_union = _test_validate(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.validate(input),
    FunctionalObjectUnion.SPOILERS,
);
