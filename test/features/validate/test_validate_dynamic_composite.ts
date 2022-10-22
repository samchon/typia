import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_composite = _test_validate(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.validate(input),
    DynamicComposite.SPOILERS,
);
