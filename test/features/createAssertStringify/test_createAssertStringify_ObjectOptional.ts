import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectOptional = _test_assertStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertStringify<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
