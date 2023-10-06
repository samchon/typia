import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_assertClone_ObjectPropertyNullable = _test_misc_assertClone(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((input) => typia.misc.assertClone<ObjectPropertyNullable>(input));
