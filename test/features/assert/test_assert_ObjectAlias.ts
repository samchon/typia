import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectAlias = _test_assert(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assert(input),
    ObjectAlias.SPOILERS,
);
