import typia from "../../../src";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalProperty = _test_equals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createEquals<FunctionalProperty>(),
);
