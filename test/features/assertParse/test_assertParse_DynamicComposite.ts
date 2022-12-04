import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicComposite = _test_assertParse(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.assertParse<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
