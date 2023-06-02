import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ObjectAlias = _test_isClone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createIsClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
