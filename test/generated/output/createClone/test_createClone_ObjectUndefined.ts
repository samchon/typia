import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_createClone_ObjectUndefined = _test_clone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: ObjectUndefined): typia.Primitive<ObjectUndefined> => {
        const $any = (typia.createClone as any).any;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id && "string" === typeof input.name;
        const $co0 = (input: any): any => ({
            name: input.name as any,
            professor: input.professor as any,
            classroom:
                "object" === typeof input.classroom && null !== input.classroom
                    ? $co1(input.classroom)
                    : (input.classroom as any),
            grade: input.grade as any,
            nothing: input.nothing as any,
            unknown: $any(input.unknown),
            never: input.never as any,
        });
        const $co1 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
        });
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                      ? $co0(elem)
                      : (elem as any),
              )
            : (input as any);
    },
);
