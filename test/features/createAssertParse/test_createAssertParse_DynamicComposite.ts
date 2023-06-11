import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertParse_DynamicComposite = _test_assertParse(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createAssertParse<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
