import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectSimple = _test_prune(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => typia.prune(input),
);
