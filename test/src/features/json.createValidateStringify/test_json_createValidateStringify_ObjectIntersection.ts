import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createValidateStringify_ObjectIntersection = (): void => _test_json_validateStringify(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.json.createValidateStringify<ObjectIntersection>());
