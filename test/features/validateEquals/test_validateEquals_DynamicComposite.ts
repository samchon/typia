import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicComposite = _test_validateEquals(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.validateEquals(input),
);