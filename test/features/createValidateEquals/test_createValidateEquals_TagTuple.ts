import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagTuple } from "../../structures/TagTuple";

export const test_validateEquals_TagTuple = _test_validateEquals<TagTuple>(
    TagTuple,
)(typia.createValidateEquals<TagTuple>());
