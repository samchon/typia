import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_validateParse_DynamicComposite = _test_validateParse(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validateParse<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
