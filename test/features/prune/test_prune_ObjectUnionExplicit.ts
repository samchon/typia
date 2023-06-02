import typia from "../../../src";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ObjectUnionExplicit = _test_prune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.prune(input),
);
