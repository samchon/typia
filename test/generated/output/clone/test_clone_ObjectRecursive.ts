import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_clone_ObjectRecursive = _test_clone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) =>
        ((
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
                    "object" === typeof input.parent && null !== input.parent
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
        })(input),
);
