import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_FunctionalArrayUnion =
    _test_assertStringify(
        "FunctionalArrayUnion",
        FunctionalArrayUnion.generate,
        typia.createAssertStringify<FunctionalArrayUnion>(),
        FunctionalArrayUnion.SPOILERS,
    );
