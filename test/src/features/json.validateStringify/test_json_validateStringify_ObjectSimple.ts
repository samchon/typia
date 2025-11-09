import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_validateStringify_ObjectSimple = (): void => _test_json_validateStringify(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.json.validateStringify<ObjectSimple>(input));
