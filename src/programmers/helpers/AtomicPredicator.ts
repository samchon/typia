import { Metadata } from "../../schemas/metadata/Metadata";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

export namespace AtomicPredicator {
  export const constant = (props: {
    metadata: Metadata;
    name: Atomic.Literal;
  }): boolean =>
    !ArrayUtil.has(
      props.metadata.natives,
      (native) => native.name.toLowerCase() === props.name,
    );

  export const atomic = (props: {
    metadata: Metadata;
    name: Atomic.Literal;
  }): boolean =>
    !ArrayUtil.has(
      props.metadata.natives,
      (native) => native.name.toLowerCase() === props.name,
    );

  export const native = (name: string) => LIKE.has(name.toLowerCase());

  export const template = (metadata: Metadata): boolean =>
    !ArrayUtil.has(
      metadata.natives,
      (native) => native.name.toLowerCase() === "string",
    );
}

const LIKE = new Set(["boolean", "bigint", "number", "string"]);
