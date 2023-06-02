import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_prune_ObjectIntersection = _test_prune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: ObjectIntersection.IEmail & ObjectIntersection.IName,
        ): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "email" === key ||
                        "name" === key ||
                        "vulnerable" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
);
