import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createAssertStringifyCustom_ConstantIntersection =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ConstantIntersection",
    )<ConstantIntersection>(ConstantIntersection)(
      typia.json.createAssertStringify<ConstantIntersection>(
        (p) => new CustomGuardError(p),
      ),
    );
