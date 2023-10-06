import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_misc_isClone_CommentTagObjectUnion = _test_misc_isClone(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    ((input: any): typia.Resolved<CommentTagObjectUnion> | null => {
        const is = (input: any): input is CommentTagObjectUnion => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7;
            const $iu0 = (input: any): any =>
                (() => {
                    if (
                        "string" === typeof input.value &&
                        3 <= input.value.length &&
                        input.value.length <= 7
                    )
                        return $io1(input);
                    else if (
                        "number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value
                    )
                        return $io0(input);
                    else return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        const clone = (
            input: CommentTagObjectUnion,
        ): typia.Resolved<CommentTagObjectUnion> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7;
            const $throws = (typia.misc.isClone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: input.value as any,
            });
            const $co1 = (input: any): any => ({
                value: input.value as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if (
                        "string" === typeof input.value &&
                        3 <= input.value.length &&
                        input.value.length <= 7
                    )
                        return $co1(input);
                    else if (
                        "number" === typeof input.value &&
                        3 <= input.value
                    )
                        return $co0(input);
                    else
                        $throws({
                            expected:
                                "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                            value: input,
                        });
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
