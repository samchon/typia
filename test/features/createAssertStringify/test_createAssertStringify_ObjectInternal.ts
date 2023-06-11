import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
