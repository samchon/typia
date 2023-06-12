import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_isStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: ToJsonDouble.Parent): string | null => {
            const is = (input: any): input is ToJsonDouble.Parent => {
                return "object" === typeof input && null !== input && true;
            };
            const stringify = (input: ToJsonDouble.Parent): string => {
                const $number = (typia.isStringify as any).number;
                return `{"id":${$number((input.toJSON() as any).id)},"flag":${
                    (input.toJSON() as any).flag
                }}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
