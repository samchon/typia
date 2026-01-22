import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createAssertStringify_ConstantConstEnumeration =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
      typia.json.createAssertStringify<ConstantConstEnumeration>(),
    );
