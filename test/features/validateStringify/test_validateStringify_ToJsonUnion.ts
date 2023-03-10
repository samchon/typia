import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_validateStringify_ToJsonUnion = _test_validateStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.validateStringify(input),
);
