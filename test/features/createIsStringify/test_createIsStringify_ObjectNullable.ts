import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectNullable = _test_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createIsStringify<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
