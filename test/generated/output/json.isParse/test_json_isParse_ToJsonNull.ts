import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_isParse_ToJsonNull = _test_json_isParse(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) =>
    ((input: any): typia.Primitive<ToJsonNull> => {
        const is = (input: any): input is ToJsonNull => {
            const $io0 = (input: any): boolean => true;
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
