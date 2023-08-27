import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_isStringify_TypeTagCustom = _test_json_isStringify(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
    ((input: TypeTagCustom): string | null => {
        const is = (input: any): input is TypeTagCustom => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    (input as any).id,
                ) &&
                "string" === typeof (input as any).dollar &&
                (input as any).dollar[0] === "$" &&
                !isNaN(
                    Number(
                        (input as any).dollar.substring(1).split(",").join(""),
                    ),
                ) &&
                "string" === typeof (input as any).postfix &&
                (input as any).postfix.endsWith("abcd")
            );
        };
        const stringify = (input: TypeTagCustom): string => {
            const $string = (typia.json.isStringify as any).string;
            return `{"id":${$string((input as any).id)},"dollar":${$string(
                (input as any).dollar,
            )},"postfix":${$string((input as any).postfix)}}`;
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
