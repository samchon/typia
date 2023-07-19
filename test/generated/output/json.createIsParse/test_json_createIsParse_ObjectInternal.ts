import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_isParse_ObjectInternal =
    _test_json_isParse<ObjectInternal>(ObjectInternal)(
        (input: any): typia.Primitive<ObjectInternal> => {
            const is = (input: any): input is ObjectInternal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).id &&
                    "string" === typeof (input as any).name
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        },
    );
