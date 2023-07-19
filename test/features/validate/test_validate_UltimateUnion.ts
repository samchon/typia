import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_validate_UltimateUnion = _test_validate<UltimateUnion>(
    UltimateUnion,
)((input) => typia.validate(input));
