import typia from "typia";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectPropertyNullable = _test_assertStringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createAssertStringify<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
