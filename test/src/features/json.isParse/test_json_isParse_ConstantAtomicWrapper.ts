import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_isParse_ConstantAtomicWrapper = (): void =>
  _test_json_isParse("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input) => typia.json.isParse<ConstantAtomicWrapper>(input));
