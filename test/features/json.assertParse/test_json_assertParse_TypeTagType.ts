import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_assertParse_TypeTagType = _test_json_assertParse(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.json.assertParse<TypeTagType>(input));
