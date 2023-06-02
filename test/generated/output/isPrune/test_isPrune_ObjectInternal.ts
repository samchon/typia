import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_isPrune_ObjectInternal = _test_isPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) =>
        ((input: any): input is ObjectInternal => {
            const is: any = (input: any): input is ObjectInternal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.id &&
                    "string" === typeof input.name
                );
            };
            const prune: any = (input: ObjectInternal): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("id" === key || "name" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectInternal.SPOILERS,
);
