import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createAssertStringify_ObjectPropertyNullable =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)(
      typia.json.createAssertStringify<ObjectPropertyNullable>(),
    );
