import { OpenApi } from "@samchon/openapi";

import { Metadata } from "../../schemas/metadata/Metadata";

import { UnionPredicator } from "../helpers/UnionPredicator";

export const application_union_discriminator = (
  meta: Metadata,
): OpenApi.IJsonSchema.IOneOf.IDiscriminator | undefined => {
  if (
    meta.size() === 0 ||
    meta.size() !== meta.objects.length ||
    meta.objects.some((o) => o.isLiteral()) === true
  )
    return undefined;
  const specialized: UnionPredicator.ISpecialized[] = UnionPredicator.object(
    meta.objects,
  );
  const meet: boolean =
    specialized.length === meta.objects.length &&
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
