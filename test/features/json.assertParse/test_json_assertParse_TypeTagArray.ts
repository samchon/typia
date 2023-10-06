import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_assertParse_TypeTagArray = _test_json_assertParse(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.json.assertParse<TypeTagArray>(input));
