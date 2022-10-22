import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_simple = _test_validate(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.validate(input),
    DynamicSimple.SPOILERS,
);
