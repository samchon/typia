import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectGenericAlias = _test_assert(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assert(input),
    ObjectGenericAlias.SPOILERS,
);
