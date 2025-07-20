import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createAssertStringifyCustom_ConstantConstEnumeration =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
      typia.json.createAssertStringify<ConstantConstEnumeration>(
        (p) => new CustomGuardError(p),
      ),
    );
