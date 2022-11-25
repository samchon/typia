import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectGenericUnion = _test_assert(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createAssert<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
