import typia from "../../../src";

import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalObjectUnion = _test_validateEquals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => typia.validateEquals(input),
);
