import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectGeneric = _test_isClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
