import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_assertParse_TagCustom = _test_json_assertParse(
    "TagCustom",
    TagCustom.generate,
    typia.json.createAssertParse<TagCustom>(),
    TagCustom.SPOILERS,
);
