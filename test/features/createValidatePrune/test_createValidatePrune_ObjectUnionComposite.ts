import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectUnionComposite = _test_validatePrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createValidatePrune<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
