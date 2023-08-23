import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_isParse_ToJsonTuple = _test_json_isParse(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
    ((input: any): typia.Primitive<ToJsonTuple> => {
        const is = (input: any): input is ToJsonTuple => {
            const $io0 = (input: any): boolean => true;
            const $io1 = (input: any): boolean => true;
            const $io2 = (input: any): boolean => true;
            const $io3 = (input: any): boolean => true;
            return (
                Array.isArray(input) &&
                input.length === 4 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io2(input[2]) &&
                "object" === typeof input[3] &&
                null !== input[3] &&
                $io3(input[3])
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
