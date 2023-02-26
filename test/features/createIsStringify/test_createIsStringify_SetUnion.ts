import typia from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_SetUnion = _test_isStringify(
    "SetUnion",
    SetUnion.generate,
    typia.createIsStringify<SetUnion>(),
    SetUnion.SPOILERS,
);
