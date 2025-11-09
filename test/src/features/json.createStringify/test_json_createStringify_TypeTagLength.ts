import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createStringify_TypeTagLength = (): void => _test_json_stringify(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.json.createStringify<TypeTagLength>());
