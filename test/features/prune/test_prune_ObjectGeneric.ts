import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_ObjectGeneric = _test_prune(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.prune(input),
);
