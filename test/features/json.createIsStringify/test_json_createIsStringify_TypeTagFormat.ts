import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createIsStringify_TypeTagFormat = _test_json_isStringify(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.json.createIsStringify<TypeTagFormat>());
