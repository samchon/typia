import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_clone_ObjectAlias = _test_misc_clone<ObjectAlias>(
    ObjectAlias,
)(typia.misc.createClone<ObjectAlias>());
