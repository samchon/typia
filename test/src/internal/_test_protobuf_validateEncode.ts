import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_protobuf_encode } from "./_test_protobuf_encode";

export const _test_protobuf_validateEncode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => typia.IValidation<Uint8Array>;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }) =>
  () => {
    _test_protobuf_encode(name)(factory)({
      message: functor.message,
      decode: functor.decode,
      encode: (input: T) => {
        const result: typia.IValidation<Uint8Array> = functor.encode(input);
        if (!result.success) throw new Error();
        typia.assertEquals(result);
        return result.data;
      },
    })();

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<Uint8Array> = functor.encode(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.json.validateEncode(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.json.validateEncode(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
