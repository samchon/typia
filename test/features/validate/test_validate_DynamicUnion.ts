import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_validate_DynamicUnion = _test_validate(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validate(input),
    DynamicUnion.SPOILERS,
);
