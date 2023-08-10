import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagArray } from "../../structures/TagArray";

export const test_validateEquals_TagArray = _test_validateEquals<TagArray>(
    TagArray,
)((input) => typia.validateEquals<TagArray>(input));
