import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_assertStringify_TypeTagLength = _test_json_assertStringify(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.json.assertStringify<TypeTagLength>(input));
