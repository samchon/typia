import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_isParse_ObjectGenericAlias =
    _test_json_isParse<ObjectGenericAlias>(ObjectGenericAlias)(
        (input: any): typia.Primitive<ObjectGenericAlias> => {
            const is = (input: any): input is ObjectGenericAlias => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).value
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        },
    );
