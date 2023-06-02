import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_UltimateUnion = _test_validateStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.validateStringify(input),
    UltimateUnion.SPOILERS,
);
