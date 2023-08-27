import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_isParse_TypeTagArrayUnion = _test_json_isParse(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)(
    (input: any): typia.Primitive<TypeTagArrayUnion> => {
        const is = (input: any): input is TypeTagArrayUnion => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every(
                    (elem: any) =>
                        "string" === typeof elem &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            elem,
                        ),
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        3 <= elem,
                ) &&
                Array.isArray(input.maxItems) &&
                input.maxItems.length <= 7 &&
                input.maxItems.every(
                    (elem: any) =>
                        ("string" === typeof elem && elem.length <= 7) ||
                        ("number" === typeof elem &&
                            Number.isFinite(elem) &&
                            elem <= 7),
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every(
                    (elem: any) =>
                        "string" === typeof elem &&
                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            elem,
                        ),
                );
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
