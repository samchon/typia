import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagObjectUnion = _test_validateEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidateEquals<TagObjectUnion>(),
);
