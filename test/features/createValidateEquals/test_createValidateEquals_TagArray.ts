import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagArray = _test_validateEquals(
    "TagArray",
    TagArray.generate,
    typia.createValidateEquals<TagArray>(),
);
