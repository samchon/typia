import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createStringify_TypeTagDefault = _test_json_stringify(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.json.createStringify<TypeTagDefault>());
