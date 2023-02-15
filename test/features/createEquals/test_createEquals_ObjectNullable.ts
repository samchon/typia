import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectNullable = _test_equals(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createEquals<ObjectNullable>(),
);
