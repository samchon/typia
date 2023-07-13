import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_stringify_DynamicConstant = _test_json_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: DynamicConstant): string => {
        const $number = (typia.json.createStringify as any).number;
        return `{"a":${$number((input as any).a)},"b":${$number(
            (input as any).b,
        )},"c":${$number((input as any).c)},"d":${$number((input as any).d)}}`;
    },
);
