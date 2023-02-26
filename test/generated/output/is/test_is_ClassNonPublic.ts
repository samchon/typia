import typia from "../../../../src";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassNonPublic = _test_is(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) =>
        ((input: any): input is ClassNonPublic.Accessor => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.implicit &&
                "string" === typeof input.shown
            );
        })(input),
    ClassNonPublic.SPOILERS,
);
