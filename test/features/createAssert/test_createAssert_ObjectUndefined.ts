import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssert_ObjectUndefined = _test_assert(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssert<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
