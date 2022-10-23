import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_simple = _test_stringify(
    "simple object",
    ObjectSimple.generate(),
    TSON.createStringify<ObjectSimple>(),
);
