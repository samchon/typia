import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createAssertParseCustom_ObjectUnionExplicit =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.json.createAssertParse<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
