import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_json_isParse_ConstantAtomicAbsorbed = _test_json_isParse(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  typia.json.isParse<ConstantAtomicAbsorbed>(input),
);
