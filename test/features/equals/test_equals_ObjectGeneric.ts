import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ObjectGeneric = _test_equals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.equals(input),
);
