import typia from "typia";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createAssertStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
