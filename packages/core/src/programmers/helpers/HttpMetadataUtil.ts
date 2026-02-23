import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";

export namespace HttpMetadataUtil {
  export const atomics = (
    metadata: MetadataSchema,
  ): Set<"boolean" | "bigint" | "number" | "string"> =>
    new Set([
      ...metadata.atomics.map((a) => a.type),
      ...metadata.constants.map((c) => c.type),
      ...(metadata.templates.length ? (["string"] as const) : []),
    ]);

  export const isUnion = (metadata: MetadataSchema): boolean =>
    atomics(metadata).size +
      metadata.arrays.length +
      metadata.tuples.length +
      metadata.natives.length +
      metadata.maps.length +
      metadata.objects.length >
    1;
}
