import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createValidateEquals_ObjectNullable = (): void => _test_validateEquals(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createValidateEquals<ObjectNullable>());
