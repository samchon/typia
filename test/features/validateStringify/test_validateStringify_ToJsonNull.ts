import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_validateStringify_ToJsonNull = _test_validateStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.validateStringify(input),
);
