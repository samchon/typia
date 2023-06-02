import typia from "../../../src";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ObjectNullable = _test_stringify(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createStringify<ObjectNullable>(),
);
