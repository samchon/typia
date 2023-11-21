import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createIsParse_TypeTagType = _test_json_isParse(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.json.createIsParse<TypeTagType>());
