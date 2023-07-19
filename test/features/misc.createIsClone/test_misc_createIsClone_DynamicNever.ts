import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_misc_isClone_DynamicNever = _test_misc_isClone<DynamicNever>(
    DynamicNever,
)(typia.misc.createIsClone<DynamicNever>());
