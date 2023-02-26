import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_createIsStringify_SetSimple = _test_isStringify(
    "SetSimple",
    SetSimple.generate,
    typia.createIsStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
