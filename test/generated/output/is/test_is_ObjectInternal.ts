import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_is_ObjectInternal = _test_is(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
    ((input: any): input is ObjectInternal => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "string" === typeof (input as any).name
        );
    })(input),
);
