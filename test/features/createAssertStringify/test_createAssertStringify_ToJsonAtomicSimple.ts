import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createAssertStringify_ToJsonAtomicSimple =
    _test_assertStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        typia.createAssertStringify<ToJsonAtomicSimple>(),
    );
