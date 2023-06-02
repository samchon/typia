import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_isStringify_ToJsonNull = _test_isStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: ToJsonNull): string | null => {
            const is: any = (input: any): input is ToJsonNull => {
                const $io0: any = (input: any): boolean => true;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (input: ToJsonNull): string => {
                return "null";
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
