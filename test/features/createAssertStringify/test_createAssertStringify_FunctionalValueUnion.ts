import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalValueUnion =
    _test_assertStringify(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        typia.createAssertStringify<FunctionalValueUnion>(),
        FunctionalValueUnion.SPOILERS,
    );
