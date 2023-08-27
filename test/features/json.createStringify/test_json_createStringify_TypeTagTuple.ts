import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_stringify_TypeTagTuple = _test_json_stringify(
    "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.json.createStringify<TypeTagTuple>());
