import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicComposite = _test_is(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.is(input),
    DynamicComposite.SPOILERS,
);