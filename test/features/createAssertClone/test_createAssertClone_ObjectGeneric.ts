import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectGeneric = _test_assertClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssertClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
