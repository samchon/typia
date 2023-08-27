import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_validatePrune_TypeTagMatrix = _test_misc_validatePrune(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
    typia.misc.validatePrune<TypeTagMatrix>(input),
);
