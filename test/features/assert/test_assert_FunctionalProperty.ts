import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.assert<FunctionalProperty>(input),
    FunctionalProperty.SPOILERS,
);
