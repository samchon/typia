import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectUnionImplicit =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertParse<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
