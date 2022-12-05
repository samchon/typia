import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalValueUnion =
    _test_validateStringify(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        TSON.createValidateStringify<FunctionalValueUnion>(),
        FunctionalValueUnion.SPOILERS,
    );
