import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalValueUnion =
    _test_validateStringify(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        (input) => typia.validateStringify(input),
        FunctionalValueUnion.SPOILERS,
    );
