import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectPropertyNullable = (): void => _test_json_assertStringify(TypeGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((input) => typia.json.assertStringify<ObjectPropertyNullable>(input));
