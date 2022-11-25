import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_FunctionalProperty = _test_assertClone(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => TSON.assertClone(input),
    FunctionalProperty.SPOILERS,
);
