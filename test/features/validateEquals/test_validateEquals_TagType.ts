import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagType } from "../../structures/TagType";

export const test_validateEquals_TagType = _test_validateEquals(
    "TagType",
)<TagType>(TagType)((input) => typia.validateEquals<TagType>(input));
