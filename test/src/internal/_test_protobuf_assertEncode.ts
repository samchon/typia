import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_assertEncode =
  (ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => Uint8Array;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }): void => {
    _test_protobuf_encode(name)(factory)({
      message: functor.message,
      decode: functor.decode,
      encode: functor.encode,
    }) satisfies void;

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        functor.encode(elem);
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        ) {
          if (exp.path && expected.includes(exp.path) === true) continue;
        } else
          console.log({
            actualClassName: (exp as any).constructor.name,
            expectedClassName: ErrorClass.name,
          });
        throw new Error(
          `Bug on typia.json.assertEncode(): failed to detect error on the ${name} type.`,
        );
      }
    }
  };
