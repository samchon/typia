import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createAssertStringifyCustom_TypeTagCustom =
  _test_json_assertStringify(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )(
    typia.json.createAssertStringify<TypeTagCustom>(
      (p) => new CustomGuardError(p),
    ),
  );
