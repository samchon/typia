import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_isParse_TagCustom = _test_json_isParse(
    "TagCustom",
    TagCustom.generate,
    typia.json.createIsParse<TagCustom>(),
    TagCustom.SPOILERS,
);
