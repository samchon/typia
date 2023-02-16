import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectUnionComposite = _test_isPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createIsPrune<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
