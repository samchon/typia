import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_createAssertParse_TypeTagLength = _test_json_assertParse(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.json.createAssertParse<TypeTagLength>());
