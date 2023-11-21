import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validateEquals_ConstantIntersection = _test_validateEquals(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.validateEquals<ConstantIntersection>(input),
);
