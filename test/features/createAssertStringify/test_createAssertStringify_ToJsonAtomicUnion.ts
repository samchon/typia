import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertStringify_ToJsonAtomicUnion =
    _test_assertStringify(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        typia.createAssertStringify<ToJsonAtomicUnion>(),
    );
