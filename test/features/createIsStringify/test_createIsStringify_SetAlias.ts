import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { SetAlias } from "../../structures/SetAlias";

export const test_createIsStringify_SetAlias = _test_isStringify(
    "SetAlias",
    SetAlias.generate,
    typia.createIsStringify<SetAlias>(),
    SetAlias.SPOILERS,
);
