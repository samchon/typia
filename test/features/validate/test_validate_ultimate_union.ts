import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_ultimate_union = _test_validate(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.validate(input),
    UltimateUnion.SPOILERS,
);
