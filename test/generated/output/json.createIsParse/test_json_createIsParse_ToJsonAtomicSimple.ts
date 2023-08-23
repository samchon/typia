import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_isParse_ToJsonAtomicSimple = _test_json_isParse(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    (input: any): typia.Primitive<ToJsonAtomicSimple> => {
        const is = (input: any): input is ToJsonAtomicSimple => {
            const $io0 = (input: any): boolean => true;
            const $io1 = (input: any): boolean => true;
            const $io2 = (input: any): boolean => true;
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io2(input[2])
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
