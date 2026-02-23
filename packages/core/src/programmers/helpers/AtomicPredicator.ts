import { Atomic } from "@typia/interface";
import { ArrayUtil } from "@typia/utils";

import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";

export namespace AtomicPredicator {
  export const constant = (props: {
    metadata: MetadataSchema;
    name: Atomic.Literal;
  }): boolean =>
    !ArrayUtil.has(
      props.metadata.natives,
      (native) => native.name.toLowerCase() === props.name,
    );

  export const atomic = (props: {
    metadata: MetadataSchema;
    name: Atomic.Literal;
  }): boolean =>
    !ArrayUtil.has(
      props.metadata.natives,
      (native) => native.name.toLowerCase() === props.name,
    );

  export const native = (name: string) => LIKE.has(name.toLowerCase());

  export const template = (metadata: MetadataSchema): boolean =>
    !ArrayUtil.has(
      metadata.natives,
      (native) => native.name.toLowerCase() === "string",
    );
}

const LIKE = new Set(["boolean", "bigint", "number", "string"]);
