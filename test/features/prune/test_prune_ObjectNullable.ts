import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectNullable = _test_prune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.prune(input),
);
