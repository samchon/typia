import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagArray } from "../../structures/TagArray";

export const test_createValidateEquals_TagArray = _test_validateEquals(
    "TagArray",
    TagArray.generate,
    typia.createValidateEquals<TagArray>(),
);
