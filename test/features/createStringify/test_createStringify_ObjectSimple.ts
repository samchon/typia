import typia from "../../../src";

import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createStringify<ObjectSimple>(),
);
