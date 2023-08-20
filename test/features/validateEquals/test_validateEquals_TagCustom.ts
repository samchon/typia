import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagCustom } from "../../structures/TagCustom";

export const test_validateEquals_TagCustom = _test_validateEquals(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.validateEquals<TagCustom>(input),
);
