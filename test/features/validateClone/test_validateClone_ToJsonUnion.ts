import typia from "../../../src";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ToJsonUnion = _test_validateClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.validateClone(input),
);
