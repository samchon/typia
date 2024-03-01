import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_assertStringifyCustom_ObjectUnionExplicit =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
    typia.json.assertStringify<ObjectUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
