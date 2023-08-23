import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_isParse_ToJsonDouble = _test_json_isParse(
    "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input: any): typia.Primitive<ToJsonDouble> => {
    const is = (input: any): input is ToJsonDouble => {
        return "object" === typeof input && null !== input && true;
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
