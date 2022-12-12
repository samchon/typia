import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalObjectUnion =
    _test_assertStringify(
        "FunctionalObjectUnion",
        FunctionalObjectUnion.generate,
        typia.createAssertStringify<FunctionalObjectUnion>(),
        FunctionalObjectUnion.SPOILERS,
    );
