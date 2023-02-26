import typia from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectInternal = _test_is(
    "ObjectInternal",
    ObjectInternal.generate,
    (input: any): input is ObjectInternal => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof input.id &&
            "string" === typeof input.name
        );
    },
    ObjectInternal.SPOILERS,
);
