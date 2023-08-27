import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_is_CommentTagArrayUnion = _test_is(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    ((input: any): input is CommentTagArrayUnion => {
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
    })(input),
);
