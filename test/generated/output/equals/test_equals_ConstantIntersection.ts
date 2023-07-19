import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_equals_ConstantIntersection =
    _test_equals<ConstantIntersection>(ConstantIntersection)((input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is [
            ConstantIntersection.Wrapper<false>,
            ConstantIntersection.Wrapper<1>,
            ConstantIntersection.Wrapper<"two">,
        ] => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        })(input),
    );
