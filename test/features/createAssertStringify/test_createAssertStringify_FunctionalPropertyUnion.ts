import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalPropertyUnion =
    _test_assertStringify(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        typia.createAssertStringify<FunctionalPropertyUnion>(),
        FunctionalPropertyUnion.SPOILERS,
    );
