import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectUnionDouble =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertStringify<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
