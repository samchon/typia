import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_is_ObjectInternal = _test_is(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: any): input is ObjectInternal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.id &&
                "string" === typeof input.name
            );
        })(input),
    ObjectInternal.SPOILERS,
);
