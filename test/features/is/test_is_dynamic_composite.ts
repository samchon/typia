import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "./_test_is";

export const test_is_dynamic_composite = _test_is(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.is(input),
    DynamicComposite.SPOILERS,
);
