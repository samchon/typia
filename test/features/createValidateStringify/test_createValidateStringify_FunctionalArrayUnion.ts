import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalArrayUnion =
    _test_validateStringify(
        "FunctionalArrayUnion",
        FunctionalArrayUnion.generate,
        TSON.createValidateStringify<FunctionalArrayUnion>(),
        FunctionalArrayUnion.SPOILERS,
    );
