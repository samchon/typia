import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_isParse_ConstantIntersection = _test_json_isParse(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.json.isParse<ConstantIntersection>(input),
);
