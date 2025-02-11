import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_assert_ObjectGenericAlias = _test_assert(TypeGuardError)(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.assert<ObjectGenericAlias>(input));
