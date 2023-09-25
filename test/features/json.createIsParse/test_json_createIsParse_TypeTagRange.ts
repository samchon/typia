import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createIsParse_TypeTagRange = _test_json_isParse(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.json.createIsParse<TypeTagRange>());
