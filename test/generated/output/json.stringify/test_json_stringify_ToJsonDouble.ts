import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_stringify_ToJsonDouble = _test_json_stringify(
    "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)((input) =>
    ((input: ToJsonDouble): string => {
        const $number = (typia.json.stringify as any).number;
        return `{"id":${$number((input.toJSON() as any).id)},"flag":${
            (input.toJSON() as any).flag
        }}`;
    })(input),
);
