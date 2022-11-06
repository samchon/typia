import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_dynamic_never = _test_validate(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createValidate<DynamicNever>(),
    DynamicNever.SPOILERS,
);
