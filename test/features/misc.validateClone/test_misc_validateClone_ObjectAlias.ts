import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_validateClone_ObjectAlias = _test_misc_validateClone(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.misc.validateClone<ObjectAlias>(input));
