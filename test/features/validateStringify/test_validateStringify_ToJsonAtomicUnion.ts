import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ToJsonAtomicUnion = _test_validateStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.validateStringify(input),
);
