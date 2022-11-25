import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalObjectUnion = _test_validate(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.validate(input),
    FunctionalObjectUnion.SPOILERS,
);
