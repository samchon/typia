import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_dynamic_simple = _test_validate(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createValidate<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
