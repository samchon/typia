import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicSimple =
    _test_validateStringify(
        "DynamicSimple",
        DynamicSimple.generate,
        TSON.createValidateStringify<DynamicSimple>(),
        DynamicSimple.SPOILERS,
    );
