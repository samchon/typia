import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TypeTagObjectUnion =
  _test_json_assertStringify(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.json.assertStringify<TypeTagObjectUnion>(input),
  );
