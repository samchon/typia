import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_stringify_ConstantAtomicWrapper =
    _test_json_stringify<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        (input) =>
            ((
                input: [
                    ConstantAtomicWrapper.IPointer<boolean>,
                    ConstantAtomicWrapper.IPointer<number>,
                    ConstantAtomicWrapper.IPointer<string>,
                ],
            ): string => {
                const $number = (typia.json.stringify as any).number;
                const $string = (typia.json.stringify as any).string;
                return `[${`{"value":${
                    (input[0] as any).value
                }}`},${`{"value":${$number(
                    (input[1] as any).value,
                )}}`},${`{"value":${$string((input[2] as any).value)}}`}]`;
            })(input),
    );
