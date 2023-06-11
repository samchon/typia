import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createValidateStringify_DynamicSimple =
    _test_validateStringify(
        "DynamicSimple",
        DynamicSimple.generate,
        typia.createValidateStringify<DynamicSimple>(),
        DynamicSimple.SPOILERS,
    );
