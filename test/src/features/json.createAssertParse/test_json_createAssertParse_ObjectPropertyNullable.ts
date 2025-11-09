import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectPropertyNullable = (): void => _test_json_assertParse(TypeGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.json.createAssertParse<ObjectPropertyNullable>());
