import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createStringify_TypeTagFormat = _test_json_stringify(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.json.createStringify<TypeTagFormat>());
