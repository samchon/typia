import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_createAssertStringify_SetUnion = _test_assertStringify(
    "SetUnion",
    SetUnion.generate,
    typia.createAssertStringify<SetUnion>(),
    SetUnion.SPOILERS,
);
