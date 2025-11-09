import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectLiteralProperty = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.json.assertParse<ObjectLiteralProperty>(input));
