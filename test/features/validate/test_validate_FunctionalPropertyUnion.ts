import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalPropertyUnion = _test_validate(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.validate(input),
    FunctionalPropertyUnion.SPOILERS,
);