import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createValidateParse_TypeTagFormat = _test_json_validateParse(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.json.createValidateParse<TypeTagFormat>());
