import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_assertStringifyCustom_ObjectUnionDouble =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.json.assertStringify<ObjectUnionDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
