import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createValidateStringify_ToJsonAtomicUnion =
    _test_validateStringify(
        "ToJsonAtomicUnion",
        ToJsonAtomicUnion.generate,
        typia.createValidateStringify<ToJsonAtomicUnion>(),
    );
