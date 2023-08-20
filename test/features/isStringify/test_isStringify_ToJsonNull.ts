import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_isStringify_ToJsonNull = _test_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.isStringify<ToJsonNull>(input),
);
