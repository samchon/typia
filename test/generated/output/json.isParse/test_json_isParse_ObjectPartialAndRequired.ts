import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_isParse_ObjectPartialAndRequired = _test_json_isParse(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    ((input: any): typia.Primitive<ObjectPartialAndRequired> => {
        const is = (input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
                (undefined === input.string ||
                    "string" === typeof input.string) &&
                (undefined === input.number ||
                    ("number" === typeof input.number &&
                        Number.isFinite(input.number))) &&
                (undefined === input.boolean ||
                    "boolean" === typeof input.boolean) &&
                (null === input.object ||
                    ("object" === typeof input.object &&
                        null !== input.object &&
                        $io0(input.object))) &&
                Array.isArray(input.array) &&
                input.array.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
