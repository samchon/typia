import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_assertParseCustom_TypeTagObjectUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.json.assertParse<TypeTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
