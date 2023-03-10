import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssert_ObjectGenericUnion = _test_assert(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createAssert<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
