import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createIsPrune_ConstantIntersection = _test_misc_isPrune(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  typia.misc.createIsPrune<ConstantIntersection>(),
);
