import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_stringify_TagMatrix = _test_stringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: TagMatrix): string => {
            const $string: any = (typia.stringify as any).string;
            const $is_uuid: any = (typia.stringify as any).is_uuid;
            const $so0: any = (input: any): any =>
                `{"matrix":${(() =>
                    `[${input.matrix
                        .map((elem: any) =>
                            (() =>
                                `[${elem
                                    .map((elem: any) => $string(elem))
                                    .join(",")}]`)(),
                        )
                        .join(",")}]`)()}}`;
            return $so0(input);
        })(input),
);
