import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagCustom } from "../../structures/TagCustom";

export const test_validateClone_TagCustom = _test_validateClone(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateClone<TagCustom>(input),
    TagCustom.SPOILERS,
);
