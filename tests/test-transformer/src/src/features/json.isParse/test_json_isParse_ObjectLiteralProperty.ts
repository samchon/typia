import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_isParse_ObjectLiteralProperty = (): void => _test_json_isParse(
    "ObjectLiteralProperty",
)<ObjectLiteralProperty>(
    ObjectLiteralProperty
)((input) => typia.json.isParse<ObjectLiteralProperty>(input));
