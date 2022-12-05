import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalArray =
    _test_validateStringify(
        "FunctionalArray",
        FunctionalArray.generate,
        TSON.createValidateStringify<FunctionalArray>(),
        FunctionalArray.SPOILERS,
    );
