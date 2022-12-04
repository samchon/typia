import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicNever = _test_assertParse(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.assertParse<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
