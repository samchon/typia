import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createValidateEquals_ObjectAlias = _test_validateEquals(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createValidateEquals<ObjectAlias>());
