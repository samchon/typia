import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createAssertParse_TypeTagType = _test_json_assertParse(
    "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.json.createAssertParse<TypeTagType>());
