import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_UltimateUnion = _test_validate(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createValidate<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
