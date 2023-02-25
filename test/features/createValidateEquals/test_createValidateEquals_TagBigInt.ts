import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagBigInt = _test_validateEquals(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidateEquals<TagBigInt>(),
);
