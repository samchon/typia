import typia from "typia";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectTuple = _test_stringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createStringify<ObjectTuple>(),
);
