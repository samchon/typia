import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_validate } from "./_test_validate";

export const test_validate_class_non_public = _test_validate(
    "non-public class member",
    ClassNonPublic.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            (input as any).implicit = false;
            return ["$input.implicit"];
        },
        (input) => {
            (input as any).shown = false;
            return ["$input.shown"];
        },
    ],
);
