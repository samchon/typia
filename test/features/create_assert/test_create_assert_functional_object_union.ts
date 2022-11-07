import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_functional_object_union = _test_assert(
    "functional union object",
    FunctionalObjectUnion.generate,
    TSON.createAssert<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);
