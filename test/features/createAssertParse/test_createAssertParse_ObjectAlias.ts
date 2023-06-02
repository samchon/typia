import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ObjectAlias = _test_assertParse(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createAssertParse<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
