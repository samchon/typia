import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_dynamic_composite = _test_equals(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.equals(input),
);
