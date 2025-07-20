import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { protobuf_equal_to } from "../helpers/protobuf_equal_to";

export const _test_protobuf_decode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    decode: (input: Uint8Array) => typia.Resolved<T>;
    encode: (input: T) => Uint8Array;
  }): void => {
    const data: T = factory.generate();
    const encoded: Uint8Array = functor.encode(data);
    const decoded: typia.Resolved<T> = functor.decode(encoded);
    const again: Uint8Array = functor.encode(decoded as T);

    const equal: boolean =
      protobuf_equal_to(name)(data, decoded) &&
      encoded.length === again.length &&
      (() => {
        for (let i: number = 0; i < encoded.length; i++)
          if (encoded[i] !== again[i]) return false;
        return true;
      })();
    if (equal === false)
      throw new Error(
        `Bug on typia.protobuf.decode(): failed to understand ${name} type.`,
      );
  };
