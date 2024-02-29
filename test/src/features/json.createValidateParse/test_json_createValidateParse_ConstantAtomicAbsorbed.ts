import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createValidateParse_ConstantAtomicAbsorbed =
  _test_json_validateParse("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )(typia.json.createValidateParse<ConstantAtomicAbsorbed>());
