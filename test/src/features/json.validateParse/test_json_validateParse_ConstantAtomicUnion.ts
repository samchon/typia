import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_validateParse_ConstantAtomicUnion = (): void =>
  _test_json_validateParse("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )((input) => typia.json.validateParse<ConstantAtomicUnion>(input));
