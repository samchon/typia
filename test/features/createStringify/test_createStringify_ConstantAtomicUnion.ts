import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ConstantAtomicUnion = _test_stringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createStringify<ConstantAtomicUnion>(),
);