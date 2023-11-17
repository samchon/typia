import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_random_DynamicConstant = _test_random(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
  random: () => typia.random<DynamicConstant>((DynamicConstant as any).RANDOM),
  assert: typia.createAssert<DynamicConstant>(),
});
