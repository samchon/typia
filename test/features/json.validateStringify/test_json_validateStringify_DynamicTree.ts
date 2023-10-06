import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_validateStringify_DynamicTree =
    _test_json_validateStringify("DynamicTree")<DynamicTree>(DynamicTree)(
        (input) => typia.json.validateStringify<DynamicTree>(input),
    );
