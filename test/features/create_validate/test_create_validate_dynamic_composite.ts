import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_dynamic_composite = _test_validate(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createValidate<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
