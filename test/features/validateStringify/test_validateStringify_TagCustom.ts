import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_validateStringify_TagCustom = _test_validateStringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateStringify<TagCustom>(input),
    TagCustom.SPOILERS,
);
