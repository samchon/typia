import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_FunctionalValueUnion = _test_assertClone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => TSON.assertClone(input),
    FunctionalValueUnion.SPOILERS,
);