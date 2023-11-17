import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertGuard_ArrayAtomicAlias = _test_assertGuard(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.createAssertGuard<ArrayAtomicAlias>(),
);
