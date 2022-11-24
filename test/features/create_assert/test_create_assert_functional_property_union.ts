import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_functional_property_union = _test_assert(
    "functional union property",
    FunctionalPropertyUnion.generate,
    TSON.createAssert<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
