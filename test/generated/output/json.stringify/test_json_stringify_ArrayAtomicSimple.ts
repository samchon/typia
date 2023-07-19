import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_stringify_ArrayAtomicSimple =
    _test_json_stringify<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
        ((input: [Array<boolean>, Array<number>, Array<string>]): string => {
            const $number = (typia.json.stringify as any).number;
            const $string = (typia.json.stringify as any).string;
            return `[${`[${input[0]
                .map((elem: any) => elem)
                .join(",")}]`},${`[${input[1]
                .map((elem: any) => $number(elem))
                .join(",")}]`},${`[${input[2]
                .map((elem: any) => $string(elem))
                .join(",")}]`}]`;
        })(input),
    );
