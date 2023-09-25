import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_isPrune_ObjectHttpConstant = _test_misc_isPrune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.misc.isPrune<ObjectHttpConstant>(input),
);
