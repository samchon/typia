import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonNull = _test_validateStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createValidateStringify<ToJsonNull>(),
);