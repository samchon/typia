import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_createAssertStringifyCustom_ObjectUnionImplicit =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertStringify<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
