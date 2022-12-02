import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicUnion = _test_validate(
    "DynamicUnion",
    DynamicUnion.generate,
    TSON.createValidate<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
