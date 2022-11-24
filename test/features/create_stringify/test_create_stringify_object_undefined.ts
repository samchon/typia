import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_object_undefined = _test_stringify(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createStringify<ObjectUndefined>(),
);
