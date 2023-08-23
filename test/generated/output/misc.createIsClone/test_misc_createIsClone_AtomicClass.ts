import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_misc_isClone_AtomicClass = _test_misc_isClone(
    "AtomicClass",
)<AtomicClass>(AtomicClass)(
    (input: any): typia.Resolved<AtomicClass> | null => {
        const is = (input: any): input is AtomicClass => {
            return (
                Array.isArray(input) &&
                input.length === 9 &&
                ("boolean" === typeof input[0] ||
                    input[0] instanceof Boolean) &&
                null !== input[1] &&
                undefined !== input[1] &&
                ("boolean" === typeof input[1] ||
                    input[1] instanceof Boolean) &&
                null !== input[2] &&
                undefined !== input[2] &&
                ("boolean" === typeof input[2] ||
                    input[2] instanceof Boolean) &&
                ("number" === typeof input[3] || input[3] instanceof Number) &&
                null !== input[4] &&
                undefined !== input[4] &&
                ("number" === typeof input[4] || input[4] instanceof Number) &&
                null !== input[5] &&
                undefined !== input[5] &&
                ("number" === typeof input[5] || input[5] instanceof Number) &&
                ("string" === typeof input[6] || input[6] instanceof String) &&
                null !== input[7] &&
                undefined !== input[7] &&
                ("string" === typeof input[7] || input[7] instanceof String) &&
                null !== input[8] &&
                undefined !== input[8] &&
                ("string" === typeof input[8] || input[8] instanceof String)
            );
        };
        const clone = (input: AtomicClass): typia.Resolved<AtomicClass> => {
            return Array.isArray(input) &&
                input.length === 9 &&
                ("boolean" === typeof input[0] ||
                    input[0] instanceof Boolean) &&
                null !== input[1] &&
                undefined !== input[1] &&
                ("boolean" === typeof input[1] ||
                    input[1] instanceof Boolean) &&
                null !== input[2] &&
                undefined !== input[2] &&
                ("boolean" === typeof input[2] ||
                    input[2] instanceof Boolean) &&
                ("number" === typeof input[3] || input[3] instanceof Number) &&
                null !== input[4] &&
                undefined !== input[4] &&
                ("number" === typeof input[4] || input[4] instanceof Number) &&
                null !== input[5] &&
                undefined !== input[5] &&
                ("number" === typeof input[5] || input[5] instanceof Number) &&
                ("string" === typeof input[6] || input[6] instanceof String) &&
                null !== input[7] &&
                undefined !== input[7] &&
                ("string" === typeof input[7] || input[7] instanceof String) &&
                null !== input[8] &&
                undefined !== input[8] &&
                ("string" === typeof input[8] || input[8] instanceof String)
                ? ([
                      input[0] instanceof Boolean
                          ? input[0].valueOf()
                          : (input[0] as any),
                      input[1] instanceof Boolean
                          ? input[1].valueOf()
                          : (input[1] as any),
                      input[2] instanceof Boolean
                          ? input[2].valueOf()
                          : (input[2] as any),
                      input[3] instanceof Number
                          ? input[3].valueOf()
                          : (input[3] as any),
                      input[4] instanceof Number
                          ? input[4].valueOf()
                          : (input[4] as any),
                      input[5] instanceof Number
                          ? input[5].valueOf()
                          : (input[5] as any),
                      input[6] instanceof String
                          ? input[6].valueOf()
                          : (input[6] as any),
                      input[7] instanceof String
                          ? input[7].valueOf()
                          : (input[7] as any),
                      input[8] instanceof String
                          ? input[8].valueOf()
                          : (input[8] as any),
                  ] as any)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
