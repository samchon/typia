import typia from "typia";

import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectLiteralProperty = _test_prune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.prune(input),
);
