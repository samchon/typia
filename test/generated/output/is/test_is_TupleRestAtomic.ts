import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_is_TupleRestAtomic = _test_is(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: any): input is [boolean, number, ...string[]] => {
            return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input.slice(2).every((elem: any) => "string" === typeof elem)
            );
        })(input),
    TupleRestAtomic.SPOILERS,
);
