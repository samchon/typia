import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_assertStringify_ConstantAtomicUnion =
    _test_json_assertStringify(
        "ConstantAtomicUnion",
        ConstantAtomicUnion.generate,
        typia.json.createAssertStringify<ConstantAtomicUnion>(),
        ConstantAtomicUnion.SPOILERS,
    );
