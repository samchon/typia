import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectUnionDouble = (): void => _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createAssertClone<ObjectUnionDouble>());
