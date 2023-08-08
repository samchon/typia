import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_validate_TagInfinite = _test_validate(
    "TagInfinite",
    TagInfinite.generate,
    typia.createValidate<TagInfinite>(),
    TagInfinite.SPOILERS,
);
