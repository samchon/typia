import typia from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_SetUnion = _test_stringify(
    "SetUnion",
    SetUnion.generate,
    (input) =>
        ((input: SetUnion): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            return `[${input.map((elem: any) => "{}").join(",")}]`;
        })(input),
);
