import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_FunctionalPropertyUnion = _test_assertClone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.assertClone(input),
    FunctionalPropertyUnion.SPOILERS,
);