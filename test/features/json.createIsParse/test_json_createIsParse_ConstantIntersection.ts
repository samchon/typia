import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createIsParse_ConstantIntersection = _test_json_isParse(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
    typia.json.createIsParse<ConstantIntersection>(),
);
