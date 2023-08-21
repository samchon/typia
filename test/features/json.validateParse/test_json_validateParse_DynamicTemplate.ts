import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_validateParse_DynamicTemplate = _test_json_validateParse(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
    typia.json.validateParse<DynamicTemplate>(input),
);
