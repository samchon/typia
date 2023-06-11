import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TagBigInt = _test_validate(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidate<TagBigInt>(),
    TagBigInt.SPOILERS,
);
