import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_createAssertParseCustom_ObjectUnionImplicit = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertParse<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
