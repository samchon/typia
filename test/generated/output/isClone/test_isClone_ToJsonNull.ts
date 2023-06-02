import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_isClone_ToJsonNull = _test_isClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: any): typia.Primitive<ToJsonNull> | null => {
            const is: any = (input: any): input is ToJsonNull => {
                const $io0: any = (input: any): boolean =>
                    "function" === typeof input.toJSON;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone: any = (
                input: ToJsonNull,
            ): typia.Primitive<ToJsonNull> => {
                return "object" === typeof input &&
                    null !== input &&
                    "function" === typeof input.toJSON
                    ? (input.toJSON() as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
);
