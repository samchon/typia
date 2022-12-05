import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicComposite = _test_validateClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.validateClone(input),
    DynamicComposite.SPOILERS,
);
