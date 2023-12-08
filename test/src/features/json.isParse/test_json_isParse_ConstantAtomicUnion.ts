import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_isParse_ConstantAtomicUnion = _test_json_isParse(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.json.isParse<ConstantAtomicUnion>(input),
);
