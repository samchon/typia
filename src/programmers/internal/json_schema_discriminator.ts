import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";

import { UnionPredicator } from "../helpers/UnionPredicator";

export const json_schema_discriminator = (
  metadata: Metadata,
): OpenApi.IJsonSchema.IOneOf.IDiscriminator | undefined => {
  if (
    metadata.size() === 0 ||
    metadata.size() !== metadata.objects.length ||
    metadata.objects.some((o) => o.type.isLiteral()) === true
  )
    return undefined;
  const specialized: UnionPredicator.ISpecialized[] = UnionPredicator.object(
    metadata.objects.map((o) => o.type),
  );
  const meet: boolean =
    specialized.length === metadata.objects.length &&
    specialized.every(
      (s) => s.property.key.isSoleLiteral() && s.property.value.isSoleLiteral(),
    ) &&
    new Set(specialized.map((s) => s.property.key.getSoleLiteral())).size === 1;
  if (meet === false) return undefined;
  return {
    propertyName: specialized[0]!.property.key.getSoleLiteral()!,
    mapping: Object.fromEntries(
      specialized.map((s) => [
        s.property.value.getSoleLiteral()!,
        `#/components/schemas/${s.object.name}`,
      ]),
    ),
  };
};
