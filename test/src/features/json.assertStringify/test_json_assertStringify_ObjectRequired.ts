import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectRequired = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.json.assertStringify<ObjectRequired>(input));
