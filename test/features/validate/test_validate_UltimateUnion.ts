import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_UltimateUnion = _test_validate(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.validate(input),
    UltimateUnion.SPOILERS,
);