import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagMatrix = _test_stringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: TagMatrix): string => {
            const $string = (typia.stringify as any).string;
            const $is_uuid = (typia.stringify as any).is_uuid;
            const $so0 = (input: any): any =>
                `{"matrix":${`[${input.matrix
                    .map(
                        (elem: any) =>
                            `[${elem
                                .map((elem: any) => $string(elem))
                                .join(",")}]`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        })(input),
);
