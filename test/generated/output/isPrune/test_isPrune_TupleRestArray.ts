import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_isPrune_TupleRestArray = _test_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) =>
        ((input: any): input is [boolean, number, ...Array<string>[]] => {
            const is = (
                input: any,
            ): input is [boolean, number, ...Array<string>[]] => {
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        )
                );
            };
            const prune = (
                input: [boolean, number, ...Array<string>[]],
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TupleRestArray.SPOILERS,
);
