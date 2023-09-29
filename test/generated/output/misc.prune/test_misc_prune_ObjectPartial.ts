import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_misc_prune_ObjectPartial = _test_misc_prune(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
    ((input: ObjectPartial): void => {
        const $io1 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every((elem: any) => "number" === typeof elem) &&
            (null === input.object ||
                ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object)));
        const $po0 = (input: any): any => {
            if ("object" === typeof input.object && null !== input.object)
                $po1(input.object);
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "array" === key ||
                    "object" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            if ("object" === typeof input.object && null !== input.object)
                $po1(input.object);
            for (const key of Object.keys(input)) {
                if (
                    "boolean" === key ||
                    "number" === key ||
                    "string" === key ||
                    "array" === key ||
                    "object" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
