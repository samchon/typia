import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectPartialAndRequired = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.json.assertStringify<ObjectPartialAndRequired>(input));
