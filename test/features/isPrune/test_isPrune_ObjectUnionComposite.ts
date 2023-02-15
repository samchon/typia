import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUnionComposite = _test_isPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isPrune(input),
    ObjectUnionComposite.SPOILERS,
);
