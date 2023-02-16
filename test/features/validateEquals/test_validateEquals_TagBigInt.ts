import typia from "typia";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagBigInt = _test_validateEquals(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validateEquals(input),
);
