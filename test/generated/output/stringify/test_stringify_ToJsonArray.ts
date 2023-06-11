import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_stringify_ToJsonArray = _test_stringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((
            input: [
                ToJsonArray.IArray<boolean>,
                ToJsonArray.IArray<number>,
                ToJsonArray.IArray<string>,
                ToJsonArray.IArray<ToJsonArray.IObject>,
            ],
        ): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            return `[${`[${input[0]
                .toJSON()
                .map((elem: any) => elem)
                .join(",")}]`},${`[${input[1]
                .toJSON()
                .map((elem: any) => $number(elem))
                .join(",")}]`},${`[${input[2]
                .toJSON()
                .map((elem: any) => $string(elem))
                .join(",")}]`},${`[${input[3]
                .toJSON()
                .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
                .join(",")}]`}]`;
        })(input),
);
