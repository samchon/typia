import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_isPrune_ObjectIntersection = _test_isPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) =>
        ((
            input: any,
        ): input is ObjectIntersection.IEmail & ObjectIntersection.IName => {
            const is = (
                input: any,
            ): input is ObjectIntersection.IEmail &
                ObjectIntersection.IName => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).email &&
                    "string" === typeof (input as any).name &&
                    "boolean" === typeof (input as any).vulnerable
                );
            };
            const prune = (
                input: ObjectIntersection.IEmail & ObjectIntersection.IName,
            ): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
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
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectIntersection.SPOILERS,
);
