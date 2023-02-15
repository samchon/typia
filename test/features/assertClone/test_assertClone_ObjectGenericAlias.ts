import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectGenericAlias = _test_assertClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertClone(input),
    ObjectGenericAlias.SPOILERS,
);
