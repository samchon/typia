import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectLiteralType = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.json.assertParse<ObjectLiteralType>(input, (p) => new CustomGuardError(p)));
