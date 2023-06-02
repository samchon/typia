import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_stringify_ToJsonTuple = _test_stringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) =>
        ((
            input: [
                ToJsonTuple.IToJson<string>,
                ToJsonTuple.IToJson<number>,
                ToJsonTuple.IToJson<boolean>,
                ToJsonTuple.IObject,
            ],
        ): string => {
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                `{"code":${$string(input.code)},"name":${$string(input.name)}}`;
            return `[${$string(input[0].toJSON())},${$number(
                input[1].toJSON(),
            )},${input[2].toJSON()},${$so0(input[3].toJSON())}]`;
        })(input),
);
