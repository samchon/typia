import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_createValidateStringify_ToJsonAtomicSimple =
    _test_validateStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        typia.createValidateStringify<ToJsonAtomicSimple>(),
    );
