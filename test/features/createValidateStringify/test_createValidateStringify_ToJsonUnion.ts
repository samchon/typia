import typia from "../../../src";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonUnion = _test_validateStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createValidateStringify<ToJsonUnion>(),
);
