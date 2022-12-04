import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicComposite =
    _test_validateStringify(
        "DynamicComposite",
        DynamicComposite.generate,
        TSON.createValidateStringify<DynamicComposite>(),
        DynamicComposite.SPOILERS,
    );
