import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createRandom_DynamicEnumeration = _test_random(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)({
  random: typia.createRandom<DynamicEnumeration>(
    (DynamicEnumeration as any).RANDOM,
  ),
  assert: typia.createAssert<DynamicEnumeration>(),
});
