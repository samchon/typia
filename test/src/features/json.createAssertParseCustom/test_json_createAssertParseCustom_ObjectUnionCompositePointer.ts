import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectUnionCompositePointer =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.json.createAssertParse<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
  );
