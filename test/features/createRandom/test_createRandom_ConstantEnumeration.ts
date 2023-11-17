import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createRandom_ConstantEnumeration = _test_random(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)({
  random: typia.createRandom<ConstantEnumeration>(
    (ConstantEnumeration as any).RANDOM,
  ),
  assert: typia.createAssert<ConstantEnumeration>(),
});
