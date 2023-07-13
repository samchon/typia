import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_json_isStringify_ToJsonDouble = _test_json_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: ToJsonDouble.Parent): string | null => {
            const is = (input: any): input is ToJsonDouble.Parent => {
                return "object" === typeof input && null !== input && true;
            };
            const stringify = (input: ToJsonDouble.Parent): string => {
                const $number = (typia.json.isStringify as any).number;
                return `{"id":${$number((input.toJSON() as any).id)},"flag":${
                    (input.toJSON() as any).flag
                }}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
