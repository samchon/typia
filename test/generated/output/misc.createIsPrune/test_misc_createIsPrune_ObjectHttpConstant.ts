import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_misc_createIsPrune_ObjectHttpConstant = _test_misc_isPrune(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
    (input: any): input is ObjectHttpConstant => {
        const is = (input: any): input is ObjectHttpConstant => {
            const $io0 = (input: any): boolean =>
                false === input.boolean &&
                (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
                (2 === input.number || 98 === input.number) &&
                ("something" === input.string ||
                    "three" === input.string ||
                    "ninety-seven" === input.string) &&
                "string" === typeof input.template &&
                RegExp(/^abcd_(.*)/).test(input.template);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: ObjectHttpConstant): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "boolean" === key ||
                        "bigint" === key ||
                        "number" === key ||
                        "string" === key ||
                        "template" === key
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
    },
);
