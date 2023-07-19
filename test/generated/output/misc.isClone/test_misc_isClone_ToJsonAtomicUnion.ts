import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_misc_isClone_ToJsonAtomicUnion =
    _test_misc_isClone<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
        ((
            input: any,
        ): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> | null => {
            const is = (
                input: any,
            ): input is Array<ToJsonAtomicUnion.IToJson> => {
                const $io0 = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone = (
                input: Array<ToJsonAtomicUnion.IToJson>,
            ): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        "function" === typeof elem.toJSON
                            ? (elem.toJSON() as any)
                            : (elem as any),
                    );
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
