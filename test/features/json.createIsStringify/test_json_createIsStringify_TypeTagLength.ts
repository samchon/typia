import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_isStringify_TypeTagLength = _test_json_isStringify(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.json.createIsStringify<TypeTagLength>());
