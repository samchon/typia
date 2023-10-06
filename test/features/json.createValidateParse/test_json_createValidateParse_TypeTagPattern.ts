import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createValidateParse_TypeTagPattern = _test_json_validateParse(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.json.createValidateParse<TypeTagPattern>());
