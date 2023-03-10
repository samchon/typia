import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createIsStringify_ToJsonAtomicUnion = _test_isStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createIsStringify<ToJsonAtomicUnion>(),
);
