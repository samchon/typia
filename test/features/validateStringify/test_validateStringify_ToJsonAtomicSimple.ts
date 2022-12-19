import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ToJsonAtomicSimple = _test_validateStringify(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => typia.validateStringify(input),
);