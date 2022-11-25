import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_functional_property = _test_assert(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.assert(input),
    FunctionalProperty.SPOILERS,
);
