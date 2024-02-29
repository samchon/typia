import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_createAssertParse_ConstantAtomicAbsorbed =
  _test_json_assertParse("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )(typia.json.createAssertParse<ConstantAtomicAbsorbed>());
