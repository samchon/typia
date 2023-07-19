import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_is_ClassMethod = _test_is<ClassMethod>(ClassMethod)(
    (input: any): input is ClassMethod => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).name &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
        );
    },
);
