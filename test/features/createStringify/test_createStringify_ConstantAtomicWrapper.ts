import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ConstantAtomicWrapper = _test_stringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createStringify<ConstantAtomicWrapper>(),
);
