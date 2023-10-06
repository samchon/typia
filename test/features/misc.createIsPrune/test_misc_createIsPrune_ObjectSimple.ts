import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_createIsPrune_ObjectSimple = _test_misc_isPrune(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.misc.createIsPrune<ObjectSimple>());
