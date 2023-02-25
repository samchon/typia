import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUnionImplicit = _test_isPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.isPrune(input),
    ObjectUnionImplicit.SPOILERS,
);
