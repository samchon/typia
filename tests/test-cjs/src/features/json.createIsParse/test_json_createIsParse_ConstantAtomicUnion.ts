import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_createIsParse_ConstantAtomicUnion = (): void =>
  _test_json_isParse("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.json.createIsParse<ConstantAtomicUnion>());
