import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_validateStringify_DynamicTemplate =
    _test_json_validateStringify<DynamicTemplate>(DynamicTemplate)((input) =>
        typia.json.validateStringify(input),
    );
