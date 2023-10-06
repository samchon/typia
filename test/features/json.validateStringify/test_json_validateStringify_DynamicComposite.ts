import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_validateStringify_DynamicComposite = _test_json_validateStringify(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)((input) => typia.json.validateStringify<DynamicComposite>(input));
