import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_createAssertParseCustom_ObjectUnionExplicitPointer =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.json.createAssertParse<ObjectUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
