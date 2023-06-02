import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createPrune_ObjectLiteralType = _test_prune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: ObjectLiteralType): void => {
        const $po0: any = (input: any): any => {
            for (const key: any of Object.keys(input)) {
                if ("id" === key || "name" === key || "age" === key) continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    },
);
