import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_createAssertParseCustom_TypeTagObjectUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.json.createAssertParse<TypeTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
