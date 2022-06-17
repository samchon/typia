import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_is } from "./_test_is";

export const test_is_class_non_public = _test_is(
    "non-public class member",
    ClassNonPublic.generate,
    (input) => TSON.is(input),
);
