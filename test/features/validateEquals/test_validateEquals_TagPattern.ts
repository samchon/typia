import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagPattern } from "../../structures/TagPattern";

export const test_validateEquals_TagPattern = _test_validateEquals(
    "TagPattern",
)<TagPattern>(TagPattern)((input) => typia.validateEquals<TagPattern>(input));
