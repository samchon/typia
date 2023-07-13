import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_json_assertStringify_ToJsonAtomicUnion =
    _test_json_assertStringify(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        typia.json.createAssertStringify<ToJsonAtomicUnion>(),
    );
