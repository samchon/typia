import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectAlias = _test_isPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isPrune(input),
    ObjectAlias.SPOILERS,
);
