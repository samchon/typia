import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createStringify_DynamicTemplate = _test_json_stringify(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(
    typia.json.createStringify<DynamicTemplate>(),
);
