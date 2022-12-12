import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonAtomicUnion = _test_validateStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createValidateStringify<ToJsonAtomicUnion>(),
);