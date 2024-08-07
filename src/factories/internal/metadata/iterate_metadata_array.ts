import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArray } from "../../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TypePredicator } from "../../../utils/TypePredicator";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_array_type } from "./emplace_metadata_array_type";

export const iterate_metadata_array =
  (checker: ts.TypeChecker) =>
  (options: MetadataFactory.IOptions) =>
  (collection: MetadataCollection) =>
  (errors: MetadataFactory.IError[]) =>
  (
    meta: Metadata,
    alias: ts.Type,
    explore: MetadataFactory.IExplore,
  ): boolean => {
    const array: ts.Type | null =
      checker.isArrayType(alias) === false
        ? find_array_extended(checker)(new Map())(alias)
        : alias;
    if (array === null) return false;

    const arrayType: MetadataArrayType = emplace_metadata_array_type(checker)(
      options,
    )(collection)(errors)(alias, array, meta.nullable, explore);
    ArrayUtil.add(
      meta.arrays,
      MetadataArray.create({
        type: arrayType,
        tags: [],
      }),
      (elem) => elem.type.name === arrayType.name,
    );
    return true;
  };

const find_array_extended =
  (checker: ts.TypeChecker) =>
  (memory: Map<ts.Type, ts.Type | null>) =>
  (type: ts.Type): ts.Type | null => {
    const cached = memory.get(type);
    if (cached !== undefined) return null;

    memory.set(type, null);
    const res: ts.Type | null = (() => {
      if (TypePredicator.isInterfaceOrClass(type) === false) return null;
      for (const t of type.resolvedBaseTypes ?? [])
        if (checker.isArrayType(t)) return t;
        else {
          const res: ts.Type | null = find_array_extended(checker)(memory)(t);
          if (res !== null) return res;
        }
      return null;
    })();
    memory.set(type, res);
    return res;
  };
