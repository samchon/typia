import typia from "typia";

import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectLiteralType = _test_prune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    typia.createPrune<ObjectLiteralType>(),
);
