import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_assertParse_TypeTagFormat = _test_json_assertParse(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.json.createAssertParse<TypeTagFormat>());
