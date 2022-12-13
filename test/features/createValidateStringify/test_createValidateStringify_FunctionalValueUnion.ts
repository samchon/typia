import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalValueUnion =
    _test_validateStringify(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        typia.createValidateStringify<FunctionalValueUnion>(),
        FunctionalValueUnion.SPOILERS,
    );
