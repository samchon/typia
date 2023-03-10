import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertStringify_DynamicComposite =
    _test_assertStringify(
        "DynamicComposite",
        DynamicComposite.generate,
        typia.createAssertStringify<DynamicComposite>(),
        DynamicComposite.SPOILERS,
    );
