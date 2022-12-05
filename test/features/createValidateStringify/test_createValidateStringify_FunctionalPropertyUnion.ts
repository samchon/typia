import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalPropertyUnion =
    _test_validateStringify(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        TSON.createValidateStringify<FunctionalPropertyUnion>(),
        FunctionalPropertyUnion.SPOILERS,
    );
