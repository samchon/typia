import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createStringify_TypeTagDefault = (): void => _test_json_stringify(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.json.createStringify<TypeTagDefault>());
