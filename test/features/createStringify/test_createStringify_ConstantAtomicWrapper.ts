import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createStringify_ConstantAtomicWrapper = _test_stringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    typia.createStringify<ConstantAtomicWrapper>(),
);
