import { TestStructure } from "@typia/template";
import pjs from "protobufjs";
import typia from "typia";

import { protobuf_equal_to } from "../utils/protobuf_equal_to";

export const _test_protobuf_encode =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    message: string;
    encode: (input: T) => Uint8Array;
    decode: (input: Uint8Array) => typia.Resolved<T>;
  }): void => {
    const data: T = factory.generate();
    const result: Uint8Array = (() => {
      try {
        return functor.encode(data);
      } catch (exp) {
        console.log((exp as any)?.message);
        throw new Error(
          `Bug on typia.protobuf.encode(): failed to encode ${name} type.`,
        );
      }
    })();

    const equal = (x: Uint8Array, y: Uint8Array) =>
      x.length === y.length &&
      (() => {
        for (let i: number = 0; i < x.length; i++)
          if (x[i] !== y[i]) return false;
        return true;
      })();

    // COMPARE WITH PROTOBUF.JS
    if (
      functor.message.indexOf("oneof") === -1 &&
      functor.message.indexOf("int64") === -1
    ) {
      const expected: Uint8Array = protobufJS(functor.message)(data);
      if (equal(result, expected) === false) {
        console.log(result.length, expected.length);
        throw new Error(
          `Bug on typia.protobuf.encode(): invalid encoding happened on ${name} type.`,
        );
      }
    }

    // COMPARE WITH DECODER
    const decoded: typia.Resolved<T> = functor.decode(result);
    const again: Uint8Array = functor.encode(decoded as T);

    if (
      protobuf_equal_to(name)(data, decoded) === false ||
      equal(result, again) === false
    )
      throw new Error(
        `Bug on typia.protobuf.encode(): failed to decode binary from encoded ${name} type.`,
      );
  };

const protobufJS =
  (message: string) =>
  <T extends object>(data: T): Uint8Array => {
    const name: string = (() => {
      const getter = (str: string) => str.split("message ")[1]!.split(" {")[0]!;
      const lines: string[] = message.split("\n").slice(2);
      const title: string = getter(lines[0]!);
      return lines[1]!.indexOf("message") === -1
        ? title
        : `${title}.${getter(lines[1]!)}`;
    })();
    const result: pjs.IParserResult = pjs.parse(message, {
      keepCase: true,
    });
    const top: pjs.Type = result.root.lookupType(name);
    return top.encode(data).finish();
  };
