import typia from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ClassNonPublic = _test_validate(
    "ClassNonPublic",
    ClassNonPublic.generate,
    typia.createValidate<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
