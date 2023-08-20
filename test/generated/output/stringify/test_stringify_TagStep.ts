import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagStep } from "../../../structures/TagStep";

export const test_stringify_TagStep = _test_stringify(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: TagStep): string => {
            const $number = (typia.stringify as any).number;
            return `[${input
                .map(
                    (elem: any) =>
                        `{"exclusiveMinimum":${$number(
                            (elem as any).exclusiveMinimum,
                        )},"minimum":${$number(
                            (elem as any).minimum,
                        )},"range":${$number(
                            (elem as any).range,
                        )},"multipleOf":${$number((elem as any).multipleOf)}}`,
                )
                .join(",")}]`;
        })(input),
);
