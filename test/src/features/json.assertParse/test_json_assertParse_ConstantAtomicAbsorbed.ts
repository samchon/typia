import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ConstantAtomicAbsorbed =
  _test_json_assertParse(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    typia.json.assertParse<ConstantAtomicAbsorbed>(input),
  );
