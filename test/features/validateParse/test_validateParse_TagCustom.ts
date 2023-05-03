import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_validateParse_TagCustom = _test_validateParse(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateParse<TagCustom>(input),
    TagCustom.SPOILERS,
);
