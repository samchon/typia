import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createRandom_ConstantConstEnumeration = _test_random(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)({
  random: typia.createRandom<ConstantConstEnumeration>(
    (ConstantConstEnumeration as any).RANDOM,
  ),
  assert: typia.createAssert<ConstantConstEnumeration>(),
});
