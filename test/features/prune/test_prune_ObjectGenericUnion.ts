import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectGenericUnion = _test_prune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.prune(input),
);
