import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectLiteralType = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)(typia.json.createAssertStringify<ObjectLiteralType>());
