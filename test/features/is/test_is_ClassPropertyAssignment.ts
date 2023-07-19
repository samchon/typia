import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_is_ClassPropertyAssignment =
    _test_is<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
        typia.is(input),
    );
