import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createIsClone_ConstantIntersection = _test_misc_isClone(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  typia.misc.createIsClone<ConstantIntersection>(),
);
