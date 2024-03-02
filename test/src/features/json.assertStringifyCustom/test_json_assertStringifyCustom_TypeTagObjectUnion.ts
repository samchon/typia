import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_assertStringifyCustom_TypeTagObjectUnion =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.json.assertStringify<TypeTagObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
