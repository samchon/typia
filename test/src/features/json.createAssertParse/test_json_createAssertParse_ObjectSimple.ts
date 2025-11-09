import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectSimple = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.json.createAssertParse<ObjectSimple>());
