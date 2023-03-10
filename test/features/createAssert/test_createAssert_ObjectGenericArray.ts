import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssert_ObjectGenericArray = _test_assert(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssert<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
