import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validateEquals_TagMatrix = _test_validateEquals<TagMatrix>(
    TagMatrix,
)((input) => typia.validateEquals(input));
