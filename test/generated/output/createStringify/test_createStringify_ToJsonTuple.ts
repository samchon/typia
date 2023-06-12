import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_createStringify_ToJsonTuple = _test_stringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input: ToJsonTuple): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        return `[${$string(input[0].toJSON())},${$number(
            input[1].toJSON(),
        )},${input[2].toJSON()},${`{"code":${$string(
            (input[3].toJSON() as any).code,
        )},"name":${$string((input[3].toJSON() as any).name)}}`}]`;
    },
);
