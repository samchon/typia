import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_createRandom_DynamicTag = _test_random(
  "DynamicTag",
)<DynamicTag>(DynamicTag)({
  random: typia.createRandom<DynamicTag>((DynamicTag as any).RANDOM),
  assert: typia.createAssert<DynamicTag>(),
});
