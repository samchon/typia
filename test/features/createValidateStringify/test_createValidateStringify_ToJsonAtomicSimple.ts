import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonAtomicSimple =
    _test_validateStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        TSON.createValidateStringify<ToJsonAtomicSimple>(),
    );