import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ObjectInternal = _test_isPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.isPrune(input),
    ObjectInternal.SPOILERS,
);
