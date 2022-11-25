import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => TSON.assert(input),
    FunctionalProperty.SPOILERS,
);