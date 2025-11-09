import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectUndefined = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)(typia.json.createAssertParse<ObjectUndefined>());
