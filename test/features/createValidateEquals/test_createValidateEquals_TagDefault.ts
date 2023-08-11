import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagDefault } from "../../structures/TagDefault";

export const test_validateEquals_TagDefault = _test_validateEquals<TagDefault>(
    TagDefault,
)(typia.createValidateEquals<TagDefault>());
