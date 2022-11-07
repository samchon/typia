import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_functional_property_union = _test_assert(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.assert(input),
    FunctionalPropertyUnion.SPOILERS,
);
