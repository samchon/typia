import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectOptional = _test_assert(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assert(input),
    ObjectOptional.SPOILERS,
);
