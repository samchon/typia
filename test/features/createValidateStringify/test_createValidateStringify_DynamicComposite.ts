import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidateStringify_DynamicComposite =
    _test_validateStringify(
        "DynamicComposite",
        DynamicComposite.generate,
        typia.createValidateStringify<DynamicComposite>(),
        DynamicComposite.SPOILERS,
    );
