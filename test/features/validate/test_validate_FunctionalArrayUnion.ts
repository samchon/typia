import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalArrayUnion = _test_validate(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => TSON.validate(input),
    FunctionalArrayUnion.SPOILERS,
);
