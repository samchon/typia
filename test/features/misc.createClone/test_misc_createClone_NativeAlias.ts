import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_misc_createClone_NativeAlias = _test_misc_clone(
    "NativeAlias",
)<NativeAlias>(
    NativeAlias
)(typia.misc.createClone<NativeAlias>());
