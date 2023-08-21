import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_isParse_DynamicConstant = _test_json_isParse(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
    typia.json.isParse<DynamicConstant>(input),
);
