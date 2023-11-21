import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createStringify_TypeTagRange = _test_json_stringify(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.json.createStringify<TypeTagRange>());
