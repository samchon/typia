import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_json_stringify_TagMatrix = _test_json_stringify(
    "TagMatrix",
)<TagMatrix>(TagMatrix)((input) =>
    ((input: TagMatrix): string => {
        const $string = (typia.json.stringify as any).string;
        const $is_uuid = (typia.json.stringify as any).is_uuid;
        const $so0 = (input: any): any =>
            `{"matrix":${`[${input.matrix
                .map(
                    (elem: any) =>
                        `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    })(input),
);
