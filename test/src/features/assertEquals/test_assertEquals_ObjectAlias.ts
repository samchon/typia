import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectAlias = _test_assertEquals(TypeGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.assertEquals<ObjectAlias>(input));
