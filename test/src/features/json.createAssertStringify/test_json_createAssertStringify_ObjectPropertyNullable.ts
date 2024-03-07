import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectPropertyNullable =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.json.createAssertStringify<ObjectPropertyNullable>(),
  );
