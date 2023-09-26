import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createStringify_TypeTagArray = _test_json_stringify(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.json.createStringify<TypeTagArray>());
