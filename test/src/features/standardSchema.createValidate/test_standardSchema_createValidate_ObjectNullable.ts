import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_standardSchema_createValidate_ObjectNullable = _test_standardSchema_validate(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createValidate<ObjectNullable>());
