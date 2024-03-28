import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createAssertStringify_ObjectUnionDouble =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertStringify<ObjectUnionDouble>(),
  );
