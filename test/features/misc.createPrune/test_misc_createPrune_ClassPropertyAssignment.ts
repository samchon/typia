import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createPrune_ClassPropertyAssignment = _test_misc_prune(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.misc.createPrune<ClassPropertyAssignment>());
