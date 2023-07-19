import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_misc_isPrune_TupleOptional =
    _test_misc_isPrune<TupleOptional>(TupleOptional)((input) =>
        ((
            input: any,
        ): input is Array<
            [
                number,
                boolean,
                string,
                (number | null | undefined)?,
                (string | null | undefined)?,
            ]
        > => {
            const is = (
                input: any,
            ): input is Array<
                [
                    number,
                    boolean,
                    string,
                    (number | null | undefined)?,
                    (string | null | undefined)?,
                ]
            > => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            3 <= elem.length &&
                            5 >= elem.length &&
                            "number" === typeof elem[0] &&
                            Number.isFinite(elem[0]) &&
                            "boolean" === typeof elem[1] &&
                            "string" === typeof elem[2] &&
                            (null === elem[3] ||
                                undefined === elem[3] ||
                                ("number" === typeof elem[3] &&
                                    Number.isFinite(elem[3]))) &&
                            (null === elem[4] ||
                                undefined === elem[4] ||
                                "string" === typeof elem[4]),
                    )
                );
            };
            const prune = (
                input: Array<
                    [
                        number,
                        boolean,
                        string,
                        (number | null | undefined)?,
                        (string | null | undefined)?,
                    ]
                >,
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
