import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectGenericAlias = _test_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isClone(input),
    ObjectGenericAlias.SPOILERS,
);
