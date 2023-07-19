import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_validateStringify_DynamicUndefined =
    _test_json_validateStringify<DynamicUndefined>(DynamicUndefined)((input) =>
        typia.json.validateStringify(input),
    );
