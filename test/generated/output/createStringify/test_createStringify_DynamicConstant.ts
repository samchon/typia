import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createStringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input: DynamicConstant): string => {
        const $number = (typia.createStringify as any).number;
        return `{"a":${$number((input as any).a)},"b":${$number(
            (input as any).b,
        )},"c":${$number((input as any).c)},"d":${$number((input as any).d)}}`;
    },
);
