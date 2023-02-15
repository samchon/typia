import typia from "typia";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectDynamic = _test_assertStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createAssertStringify<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
