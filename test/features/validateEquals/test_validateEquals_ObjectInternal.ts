import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_validateEquals_ObjectInternal = _test_validateEquals(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validateEquals(input),
);
