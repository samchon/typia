import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createAssertClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
