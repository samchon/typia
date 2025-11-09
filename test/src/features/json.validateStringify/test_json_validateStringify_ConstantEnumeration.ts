import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_validateStringify_ConstantEnumeration = (): void => _test_json_validateStringify(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)((input) => typia.json.validateStringify<ConstantEnumeration>(input));
