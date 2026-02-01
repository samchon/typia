import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectAlias = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.json.createAssertParse<ObjectAlias>());
