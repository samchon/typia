import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_misc_isPrune_ObjectIntersection =
    _test_misc_isPrune<ObjectIntersection>(ObjectIntersection)(
        (input: any): input is ObjectIntersection => {
            const is = (input: any): input is ObjectIntersection => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).email &&
                    "string" === typeof (input as any).name &&
                    "boolean" === typeof (input as any).vulnerable
                );
            };
            const prune = (input: ObjectIntersection): void => {
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
        },
    );
