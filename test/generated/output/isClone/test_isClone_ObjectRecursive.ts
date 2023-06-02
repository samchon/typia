import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_isClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectRecursive.IDepartment> | null => {
            const is: any = (
                input: any,
            ): input is ObjectRecursive.IDepartment => {
                const $io0: any = (input: any): boolean =>
                    (null === input.parent ||
                        ("object" === typeof input.parent &&
                            null !== input.parent &&
                            $io0(input.parent))) &&
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name &&
                    "number" === typeof input.sequence &&
                    Number.isFinite(input.sequence) &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    "number" === typeof input.created_at.time &&
                    Number.isFinite(input.created_at.time) &&
                    "number" === typeof input.created_at.zone &&
                    Number.isFinite(input.created_at.zone);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone: any = (
                input: ObjectRecursive.IDepartment,
            ): typia.Primitive<ObjectRecursive.IDepartment> => {
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
                const $co0: any = (input: any): any => ({
                    parent:
                        "object" === typeof input.parent &&
                        null !== input.parent
                            ? $co0(input.parent)
                            : (input.parent as any),
                    id: input.id as any,
                    code: input.code as any,
                    name: input.name as any,
                    sequence: input.sequence as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co1(input.created_at)
                            : (input.created_at as any),
                });
                const $co1: any = (input: any): any => ({
                    time: input.time as any,
                    zone: input.zone as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ObjectRecursive.SPOILERS,
);
