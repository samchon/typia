import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_isPrune_ObjectLiteralType = _test_isPrune(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input) =>
        ((input: any): input is { id: string; name: string; age: number } => {
            const is = (
                input: any,
            ): input is { id: string; name: string; age: number } => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const prune = (input: {
                id: string;
                name: string;
                age: number;
            }): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("id" === key || "name" === key || "age" === key)
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
    ObjectLiteralType.SPOILERS,
);
