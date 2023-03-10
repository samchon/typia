import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createValidateStringify_UltimateUnion =
    _test_validateStringify(
        "UltimateUnion",
        UltimateUnion.generate,
        typia.createValidateStringify<UltimateUnion>(),
        UltimateUnion.SPOILERS,
    );
