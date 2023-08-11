import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_misc_isPrune_ObjectJsonTag =
    _test_misc_isPrune<ObjectJsonTag>(ObjectJsonTag)((input) =>
        ((input: any): input is ObjectJsonTag => {
            const is = (input: any): input is ObjectJsonTag => {
                const $is_custom = (typia.misc.isPrune as any).is_custom;
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).vulnerable &&
                    $is_custom(
                        "deprecated",
                        "string",
                        "",
                        (input as any).vulnerable,
                    ) &&
                    "string" === typeof (input as any).description &&
                    "string" === typeof (input as any).title &&
                    $is_custom(
                        "title",
                        "string",
                        "something",
                        (input as any).title,
                    ) &&
                    "string" === typeof (input as any).complicate_title
                );
            };
            const prune = (input: ObjectJsonTag): void => {
                const $is_custom = (typia.misc.isPrune as any).is_custom;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "vulnerable" === key ||
                            "description" === key ||
                            "title" === key ||
                            "complicate_title" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
