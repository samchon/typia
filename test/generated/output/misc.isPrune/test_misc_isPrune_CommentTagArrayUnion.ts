import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_misc_isPrune_CommentTagArrayUnion = _test_misc_isPrune(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    ((input: any): input is CommentTagArrayUnion => {
        const is = (input: any): input is CommentTagArrayUnion => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input.maxItems) &&
                input.maxItems.length <= 7 &&
                input.maxItems.every(
                    (elem: any) =>
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)),
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every((elem: any) => "string" === typeof elem);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune = (input: CommentTagArrayUnion): void => {
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "items" === key ||
                        "minItems" === key ||
                        "maxItems" === key ||
                        "both" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
