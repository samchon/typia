import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalObjectUnion =
    _test_validateStringify(
        "FunctionalObjectUnion",
        FunctionalObjectUnion.generate,
        TSON.createValidateStringify<FunctionalObjectUnion>(),
        FunctionalObjectUnion.SPOILERS,
    );
