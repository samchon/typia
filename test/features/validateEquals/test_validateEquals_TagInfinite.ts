import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagInfinite = _test_validateEquals(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.validateEquals(input),
);
