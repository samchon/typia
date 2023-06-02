import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_isParse_ObjectGenericAlias = _test_isParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectGenericAlias> => {
            const is: any = (input: any): input is ObjectGenericAlias => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.value
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    ObjectGenericAlias.SPOILERS,
);
