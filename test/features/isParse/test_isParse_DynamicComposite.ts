import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicComposite = _test_isParse(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.isParse<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
