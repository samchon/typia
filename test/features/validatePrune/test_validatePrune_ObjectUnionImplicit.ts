import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUnionImplicit = _test_validatePrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionImplicit.SPOILERS,
);
