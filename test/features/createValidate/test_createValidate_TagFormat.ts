import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TagFormat = _test_validate(
    "TagFormat",
    TagFormat.generate,
    typia.createValidate<TagFormat>(),
    TagFormat.SPOILERS,
);
