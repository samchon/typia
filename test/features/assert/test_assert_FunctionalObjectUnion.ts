import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalObjectUnion = _test_assert(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.assert(input),
    FunctionalObjectUnion.SPOILERS,
);