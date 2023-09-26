import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createIsParse_DynamicTemplate = _test_json_isParse(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(
    typia.json.createIsParse<DynamicTemplate>(),
);
