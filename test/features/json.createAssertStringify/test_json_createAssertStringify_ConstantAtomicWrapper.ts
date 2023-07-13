import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_assertStringify_ConstantAtomicWrapper =
    _test_json_assertStringify(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.json.createAssertStringify<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
