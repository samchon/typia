import typia from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalPropertyUnion = _test_is(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) =>
        ((input: any): input is FunctionalPropertyUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.name &&
                (null === input.closure ||
                    undefined === input.closure ||
                    "function" === typeof input.closure ||
                    "string" === typeof input.closure ||
                    ("number" === typeof input.closure &&
                        Number.isFinite(input.closure)));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        })(input),
    FunctionalPropertyUnion.SPOILERS,
);
