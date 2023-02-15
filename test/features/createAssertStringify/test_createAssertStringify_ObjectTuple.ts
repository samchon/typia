import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectTuple = _test_assertStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createAssertStringify<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
