import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_class_non_public = _test_stringify(
    "non-public class member",
    ClassNonPublic.generate,
    (input) => TSON.stringify(input),
);
