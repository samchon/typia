import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assert_ObjectGenericArray = _test_assert(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
    typia.createAssert<ObjectGenericArray>(),
);
