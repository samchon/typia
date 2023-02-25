import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectUnionComposite = _test_prune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.prune(input),
);
