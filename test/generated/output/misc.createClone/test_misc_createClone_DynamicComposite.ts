import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_misc_clone_DynamicComposite = _test_misc_clone(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
    (input: DynamicComposite): typia.Resolved<DynamicComposite> => {
        const $join = (typia.misc.createClone as any).join;
        const $co0 = (input: any): any => {
            const output = {
                id: input.id as any,
                name: input.name as any,
            } as any;
            for (const [key, value] of Object.entries(input)) {
                if (["id", "name"].some((regular: any) => regular === key))
                    continue;
                if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (RegExp(/^(prefix_(.*))/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (RegExp(/((.*)_postfix)$/).test(key)) {
                    output[key] = value as any;
                    continue;
                }
                if (
                    RegExp(
                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                    output[key] = value as any;
                    continue;
                }
                if (
                    RegExp(
                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                ) {
                    output[key] = value as any;
                    continue;
                }
            }
            return output;
        };
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
