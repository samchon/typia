import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_assertParse_TypeTagDefault = _test_json_assertParse(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.json.assertParse<TypeTagDefault>(input));
