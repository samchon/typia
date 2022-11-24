import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_generic_union = _test_assert(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createAssert<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
