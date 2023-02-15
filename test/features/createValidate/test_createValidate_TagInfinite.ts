import typia from "typia";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagInfinite = _test_validate(
    "TagInfinite",
    TagInfinite.generate,
    typia.createValidate<TagInfinite>(),
    TagInfinite.SPOILERS,
);
