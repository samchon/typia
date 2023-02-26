import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { SetUnion } from "../../../structures/SetUnion";

export const test_createStringify_SetUnion = _test_stringify(
    "SetUnion",
    SetUnion.generate,
    (input: Array<SetUnion.Union>): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        return `[${input.map((elem: any) => "{}").join(",")}]`;
    },
);
