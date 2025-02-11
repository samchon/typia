import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createEquals_ObjectNullable = _test_equals(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createEquals<ObjectNullable>());
