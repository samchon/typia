import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_validateStringify_ToJsonAtomicSimple =
    _test_validateStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        (input) => typia.validateStringify<ToJsonAtomicSimple>(input),
    );
