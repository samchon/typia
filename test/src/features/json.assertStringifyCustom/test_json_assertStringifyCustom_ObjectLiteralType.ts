import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectLiteralType = (): void => _test_json_assertStringify(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.json.assertStringify<ObjectLiteralType>(input, (p) => new CustomGuardError(p)));
