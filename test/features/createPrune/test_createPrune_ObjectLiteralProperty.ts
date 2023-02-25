import typia from "../../../src";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectLiteralProperty = _test_prune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    typia.createPrune<ObjectLiteralProperty>(),
);
