import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_misc_validatePrune_ClassGetter = _test_misc_validatePrune(
    "ClassGetter",
)<ClassGetter>(ClassGetter)((input) =>
    typia.misc.validatePrune<ClassGetter>(input),
);
