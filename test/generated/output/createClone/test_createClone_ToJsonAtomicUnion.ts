import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_createClone_ToJsonAtomicUnion = _test_clone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input: ToJsonAtomicUnion): typia.Primitive<ToJsonAtomicUnion> => {
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  "function" === typeof elem.toJSON
                      ? (elem.toJSON() as any)
                      : (elem as any),
              )
            : (input as any);
    },
);
