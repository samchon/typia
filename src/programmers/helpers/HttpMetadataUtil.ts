import { Metadata } from "../../schemas/metadata/Metadata";

export namespace HttpMetadataUtil {
  export const atomics = (
    metadata: Metadata,
  ): Set<"boolean" | "bigint" | "number" | "string"> =>
    new Set([
      ...metadata.atomics.map((a) => a.type),
      ...metadata.constants.map((c) => c.type),
      ...(metadata.templates.length ? (["string"] as const) : []),
    ]);

  export const isUnion = (metadata: Metadata): boolean =>
    atomics(metadata).size +
      metadata.arrays.length +
      metadata.tuples.length +
      metadata.natives.length +
      metadata.maps.length +
      metadata.objects.length >
    1;
}
