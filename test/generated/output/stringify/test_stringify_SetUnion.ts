import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { SetUnion } from "../../../structures/SetUnion";

export const test_stringify_SetUnion = _test_stringify(
    "SetUnion",
    SetUnion.generate,
    (input) =>
        ((input: Array<SetUnion.Union>): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            return `[${input.map((elem: any) => "{}").join(",")}]`;
        })(input),
);
