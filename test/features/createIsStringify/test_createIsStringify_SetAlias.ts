import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_SetAlias = _test_isStringify(
    "SetAlias",
    SetAlias.generate,
    TSON.createIsStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
