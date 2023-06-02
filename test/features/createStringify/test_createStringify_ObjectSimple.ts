import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createStringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createStringify<ObjectSimple>(),
);
