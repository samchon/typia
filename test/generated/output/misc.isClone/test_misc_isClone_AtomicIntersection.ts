import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_isClone_AtomicIntersection =
    _test_misc_isClone<AtomicIntersection>(AtomicIntersection)((input) =>
        ((input: any): typia.Primitive<AtomicIntersection> | null => {
            const is = (input: any): input is AtomicIntersection => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const clone = (
                input: AtomicIntersection,
            ): typia.Primitive<AtomicIntersection> => {
                return Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    "string" === typeof input[2]
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          input[2] as any,
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
