import typia from "../../../src";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectNullable = _test_validateClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validateClone(input),
    ObjectNullable.SPOILERS,
);
