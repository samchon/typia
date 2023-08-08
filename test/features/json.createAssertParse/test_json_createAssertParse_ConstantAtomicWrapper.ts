import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_assertParse_ConstantAtomicWrapper =
    _test_json_assertParse(
        "ConstantAtomicWrapper",
        ConstantAtomicWrapper.generate,
        typia.json.createAssertParse<ConstantAtomicWrapper>(),
        ConstantAtomicWrapper.SPOILERS,
    );
