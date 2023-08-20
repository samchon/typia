import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_validateStringify_UltimateUnion = _test_validateStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.validateStringify<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
