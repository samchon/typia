import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_misc_prune_CommentTagObjectUnion = _test_misc_prune(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    ((input: CommentTagObjectUnion): void => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.value && 3 <= input.value;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7;
        const $throws = (typia.misc.prune as any).throws;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any): any =>
            (() => {
                if (
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    input.value.length <= 7
                )
                    return $po1(input);
                else if ("number" === typeof input.value && 3 <= input.value)
                    return $po0(input);
                else
                    $throws({
                        expected:
                            "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                        value: input,
                    });
            })();
        if (Array.isArray(input)) $pp0(input);
    })(input),
);
