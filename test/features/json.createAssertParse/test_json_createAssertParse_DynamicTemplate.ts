import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_createAssertParse_DynamicTemplate =
    _test_json_assertParse("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
        typia.json.createAssertParse<DynamicTemplate>(),
    );
