import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ConstantAtomicAbsorbed =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    typia.json.createAssertStringify<ConstantAtomicAbsorbed>(),
  );
