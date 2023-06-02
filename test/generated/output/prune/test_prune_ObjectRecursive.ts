import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_prune_ObjectRecursive = _test_prune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) =>
        ((input: ObjectRecursive.IDepartment): void => {
            const $io0: any = (input: any): boolean =>
                (null === input.parent ||
                    ("object" === typeof input.parent &&
                        null !== input.parent &&
                        $io0(input.parent))) &&
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $po0: any = (input: any): any => {
                if ("object" === typeof input.parent && null !== input.parent)
                    $po0(input.parent);
                if (
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                )
                    $po1(input.created_at);
                for (const key: any of Object.keys(input)) {
                    if (
                        "parent" === key ||
                        "id" === key ||
                        "code" === key ||
                        "name" === key ||
                        "sequence" === key ||
                        "created_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("time" === key || "zone" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
