import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_TagCustom = _test_validateStringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateStringify(input),
    TagCustom.SPOILERS,
);
