import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectGenericAlias = _test_assertStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertStringify<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
