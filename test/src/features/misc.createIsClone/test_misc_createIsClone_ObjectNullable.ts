import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createIsClone_ObjectNullable = (): void => _test_misc_isClone(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.misc.createIsClone<ObjectNullable>());
