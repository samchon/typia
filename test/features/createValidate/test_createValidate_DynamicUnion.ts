import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createValidate_DynamicUnion = _test_validate(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createValidate<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
