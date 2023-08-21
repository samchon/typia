import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagFormat } from "../../structures/TagFormat";

export const test_validateEquals_TagFormat = _test_validateEquals(
    "TagFormat",
)<TagFormat>(TagFormat)((input) => typia.validateEquals<TagFormat>(input));
