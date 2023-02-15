import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectAlias = _test_assertEquals(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createAssertEquals<ObjectAlias>(),
);
