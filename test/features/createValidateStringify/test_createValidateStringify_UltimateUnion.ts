import typia from "../../../src";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_UltimateUnion = _test_validateStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createValidateStringify<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
