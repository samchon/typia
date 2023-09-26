import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createStringify_TypeTagPattern = _test_json_stringify(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.json.createStringify<TypeTagPattern>());
