import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_createStringify_ToJsonTuple = _test_json_stringify(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input: ToJsonTuple): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    return `[${$string(input[0].toJSON())},${$number(
        input[1].toJSON(),
    )},${input[2].toJSON()},${`{"code":${$string(
        (input[3].toJSON() as any).code,
    )},"name":${$string((input[3].toJSON() as any).name)}}`}]`;
});
