import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createValidateStringify_ToJsonUnion = _test_validateStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createValidateStringify<ToJsonUnion>(),
);
