import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_createAssertClone_DynamicComposite = _test_misc_assertClone(
    "DynamicComposite",
)<DynamicComposite>(
    DynamicComposite
)(typia.misc.createAssertClone<DynamicComposite>());
