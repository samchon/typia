import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_misc_prune_ObjectAlias = _test_misc_prune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) =>
        ((input: Array<ObjectAlias.IMember>): void => {
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "email" === key ||
                        "name" === key ||
                        "sex" === key ||
                        "age" === key ||
                        "dead" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input)) $pp0(input);
        })(input),
);
