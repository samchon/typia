import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_dynamic_composite = _test_stringify(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.stringify(input),
);
