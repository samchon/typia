import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ObjectGeneric = _test_assert(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assert(input),
    ObjectGeneric.SPOILERS,
);
