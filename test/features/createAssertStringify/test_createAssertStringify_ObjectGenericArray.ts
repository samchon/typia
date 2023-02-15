import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectGenericArray =
    _test_assertStringify(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        typia.createAssertStringify<ObjectGenericArray>(),
        ObjectGenericArray.SPOILERS,
    );
