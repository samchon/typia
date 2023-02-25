import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUnionComposite = _test_assertPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssertPrune<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
