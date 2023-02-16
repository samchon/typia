import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectAlias = _test_clone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createClone<ObjectAlias>(),
);
