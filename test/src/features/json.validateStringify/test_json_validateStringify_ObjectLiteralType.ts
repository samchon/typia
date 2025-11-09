import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_validateStringify_ObjectLiteralType = (): void => _test_json_validateStringify(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.json.validateStringify<ObjectLiteralType>(input));
