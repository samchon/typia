import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_assertParse_TypeTagCustom = _test_json_assertParse(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.json.createAssertParse<TypeTagCustom>());
