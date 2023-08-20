import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validateStringify_ConstantAtomicSimple =
    _test_validateStringify(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        (input) => typia.validateStringify<ConstantAtomicSimple>(input),
        ConstantAtomicSimple.SPOILERS,
    );
