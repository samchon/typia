import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ObjectUnionImplicit = _test_prune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.prune(input),
);
