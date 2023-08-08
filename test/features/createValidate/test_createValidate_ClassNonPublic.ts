import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_validate_ClassNonPublic = _test_validate(
    "ClassNonPublic",
    ClassNonPublic.generate,
    typia.createValidate<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
