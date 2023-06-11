import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.isStringify(input),
    ObjectDynamic.SPOILERS,
);
