import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_array_union = _test_validate(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.validate(input),
    FunctionalArrayUnion.SPOILERS,
);
