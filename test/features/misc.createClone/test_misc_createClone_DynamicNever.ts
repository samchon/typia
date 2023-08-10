import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_clone_DynamicNever = _test_misc_clone<DynamicNever>(
    DynamicNever,
)(typia.misc.createClone<DynamicNever>());
