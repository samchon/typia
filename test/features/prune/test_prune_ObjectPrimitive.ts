import typia from "../../../src";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ObjectPrimitive = _test_prune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.prune(input),
);
