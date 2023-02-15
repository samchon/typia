import typia from "typia";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectGeneric = _test_stringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createStringify<ObjectGeneric>(),
);
