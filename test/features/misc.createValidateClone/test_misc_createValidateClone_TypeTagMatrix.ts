import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_validateClone_TypeTagMatrix = _test_misc_validateClone(
    "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)(
    typia.misc.createValidateClone<TypeTagMatrix>(),
);
