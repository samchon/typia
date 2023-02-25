import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagTuple = _test_validate(
    "TagTuple",
    TagTuple.generate,
    typia.createValidate<TagTuple>(),
    TagTuple.SPOILERS,
);
