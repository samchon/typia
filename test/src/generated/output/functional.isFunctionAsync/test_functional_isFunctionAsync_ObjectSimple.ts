import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_functional_isFunctionAsync_ObjectSimple =
  _test_functional_isFunctionAsync("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      async (input: ObjectSimple): Promise<ObjectSimple | null> => {
        if (
          false ===
          ((input: any): input is ObjectSimple.IBox3D => {
            return (
              "object" === typeof input &&
              null !== input &&
              "object" === typeof (input as any).scale &&
              null !== (input as any).scale &&
              "number" === typeof ((input as any).scale as any).x &&
              Number.isFinite(((input as any).scale as any).x) &&
              "number" === typeof ((input as any).scale as any).y &&
              Number.isFinite(((input as any).scale as any).y) &&
              "number" === typeof ((input as any).scale as any).z &&
              Number.isFinite(((input as any).scale as any).z) &&
              "object" === typeof (input as any).position &&
              null !== (input as any).position &&
              "number" === typeof ((input as any).position as any).x &&
              Number.isFinite(((input as any).position as any).x) &&
              "number" === typeof ((input as any).position as any).y &&
              Number.isFinite(((input as any).position as any).y) &&
              "number" === typeof ((input as any).position as any).z &&
              Number.isFinite(((input as any).position as any).z) &&
              "object" === typeof (input as any).rotate &&
              null !== (input as any).rotate &&
              "number" === typeof ((input as any).rotate as any).x &&
              Number.isFinite(((input as any).rotate as any).x) &&
              "number" === typeof ((input as any).rotate as any).y &&
              Number.isFinite(((input as any).rotate as any).y) &&
              "number" === typeof ((input as any).rotate as any).z &&
              Number.isFinite(((input as any).rotate as any).z) &&
              "object" === typeof (input as any).pivot &&
              null !== (input as any).pivot &&
              "number" === typeof ((input as any).pivot as any).x &&
              Number.isFinite(((input as any).pivot as any).x) &&
              "number" === typeof ((input as any).pivot as any).y &&
              Number.isFinite(((input as any).pivot as any).y) &&
              "number" === typeof ((input as any).pivot as any).z &&
              Number.isFinite(((input as any).pivot as any).z)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectSimple.IBox3D => {
          return (
            "object" === typeof input &&
            null !== input &&
            "object" === typeof (input as any).scale &&
            null !== (input as any).scale &&
            "number" === typeof ((input as any).scale as any).x &&
            Number.isFinite(((input as any).scale as any).x) &&
            "number" === typeof ((input as any).scale as any).y &&
            Number.isFinite(((input as any).scale as any).y) &&
            "number" === typeof ((input as any).scale as any).z &&
            Number.isFinite(((input as any).scale as any).z) &&
            "object" === typeof (input as any).position &&
            null !== (input as any).position &&
            "number" === typeof ((input as any).position as any).x &&
            Number.isFinite(((input as any).position as any).x) &&
            "number" === typeof ((input as any).position as any).y &&
            Number.isFinite(((input as any).position as any).y) &&
            "number" === typeof ((input as any).position as any).z &&
            Number.isFinite(((input as any).position as any).z) &&
            "object" === typeof (input as any).rotate &&
            null !== (input as any).rotate &&
            "number" === typeof ((input as any).rotate as any).x &&
            Number.isFinite(((input as any).rotate as any).x) &&
            "number" === typeof ((input as any).rotate as any).y &&
            Number.isFinite(((input as any).rotate as any).y) &&
            "number" === typeof ((input as any).rotate as any).z &&
            Number.isFinite(((input as any).rotate as any).z) &&
            "object" === typeof (input as any).pivot &&
            null !== (input as any).pivot &&
            "number" === typeof ((input as any).pivot as any).x &&
            Number.isFinite(((input as any).pivot as any).x) &&
            "number" === typeof ((input as any).pivot as any).y &&
            Number.isFinite(((input as any).pivot as any).y) &&
            "number" === typeof ((input as any).pivot as any).z &&
            Number.isFinite(((input as any).pivot as any).z)
          );
        })(result)
          ? result
          : null;
      },
  );
