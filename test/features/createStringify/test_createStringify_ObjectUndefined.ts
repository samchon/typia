import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectUndefined = _test_stringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createStringify<ObjectUndefined>(),
);