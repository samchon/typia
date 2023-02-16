import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectGeneric = _test_assertStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssertStringify<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
