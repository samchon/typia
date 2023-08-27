import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_stringify_TypeTagLength = _test_json_stringify(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.json.createStringify<TypeTagLength>());
