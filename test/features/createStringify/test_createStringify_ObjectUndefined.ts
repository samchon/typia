import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createStringify_ObjectUndefined = _test_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createStringify<ObjectUndefined>(),
);
