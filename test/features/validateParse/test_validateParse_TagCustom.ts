import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_TagCustom = _test_validateParse(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateParse<TagCustom>(input),
    TagCustom.SPOILERS,
);
