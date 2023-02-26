import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createStringify_ConstantAtomicUnion = _test_stringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createStringify<ConstantAtomicUnion>(),
);
