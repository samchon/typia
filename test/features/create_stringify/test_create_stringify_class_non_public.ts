import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_class_non_public = _test_stringify(
    "non-public class member",
    ClassNonPublic.generate(),
    TSON.createStringify<ClassNonPublic>(),
);
