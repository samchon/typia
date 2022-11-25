import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => TSON.stringify(input),
);
