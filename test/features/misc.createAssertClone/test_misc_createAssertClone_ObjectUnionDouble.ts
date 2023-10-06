import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createAssertClone_ObjectUnionDouble = _test_misc_assertClone(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createAssertClone<ObjectUnionDouble>());
