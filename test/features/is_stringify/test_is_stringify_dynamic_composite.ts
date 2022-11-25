import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_dynamic_composite = _test_is_stringify(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.isStringify(input),
    DynamicComposite.SPOILERS,
);
