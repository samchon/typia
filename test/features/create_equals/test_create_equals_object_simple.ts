import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_simple = _test_equals(
    "simple object",
    ObjectSimple.generate,
    TSON.createEquals<ObjectSimple>(),
);
