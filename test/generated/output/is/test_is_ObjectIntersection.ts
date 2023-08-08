import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_is_ObjectIntersection = _test_is(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
        ): input is ObjectIntersection.IEmail & ObjectIntersection.IName => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).email &&
                "string" === typeof (input as any).name &&
                "boolean" === typeof (input as any).vulnerable
            );
        })(input),
    ObjectIntersection.SPOILERS,
);
