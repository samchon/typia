import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_UltimateUnion = _test_validate(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createValidate<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
