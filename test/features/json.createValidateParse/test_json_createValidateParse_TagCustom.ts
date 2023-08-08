import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_validateParse_TagCustom = _test_json_validateParse(
    "TagCustom",
    TagCustom.generate,
    typia.json.createValidateParse<TagCustom>(),
    TagCustom.SPOILERS,
);
