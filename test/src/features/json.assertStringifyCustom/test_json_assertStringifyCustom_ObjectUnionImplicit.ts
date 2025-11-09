import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_assertStringifyCustom_ObjectUnionImplicit = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.json.assertStringify<ObjectUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
