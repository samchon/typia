import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_ObjectGeneric = _test_stringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.stringify(input),
);
