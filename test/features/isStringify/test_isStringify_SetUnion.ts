import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_isStringify_SetUnion = _test_isStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.isStringify<SetUnion>(input),
    SetUnion.SPOILERS,
);
