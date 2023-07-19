import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_assert_ConstantAtomicWrapper =
    _test_assert<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
        typia.assert(input),
    );
