import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_isParse_DynamicTemplate = _test_json_isParse(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.json.isParse<DynamicTemplate>(input),
);
