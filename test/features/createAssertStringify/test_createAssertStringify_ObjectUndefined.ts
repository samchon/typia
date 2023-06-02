import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertStringify_ObjectUndefined = _test_assertStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertStringify<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
