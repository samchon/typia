import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_dynamic_composite = _test_validate_equals(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.validateEquals(input),
);
