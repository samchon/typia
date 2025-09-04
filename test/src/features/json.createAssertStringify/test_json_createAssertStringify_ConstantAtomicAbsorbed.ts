import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createAssertStringify_ConstantAtomicAbsorbed =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
      typia.json.createAssertStringify<ConstantAtomicAbsorbed>(),
    );
