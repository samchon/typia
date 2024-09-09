import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataAlias } from "../schemas/metadata/MetadataAlias";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataConstant } from "../schemas/metadata/MetadataConstant";
import { MetadataFunction } from "../schemas/metadata/MetadataFunction";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";
import { explore_metadata } from "./internal/metadata/explore_metadata";
import { iterate_metadata_collection } from "./internal/metadata/iterate_metadata_collection";
import { iterate_metadata_sort } from "./internal/metadata/iterate_metadata_sort";

import { ValidationPipe } from "../typings/ValidationPipe";

import { ExpressionFactory } from "./ExpressionFactory";
import { MetadataCollection } from "./MetadataCollection";

export namespace MetadataFactory {
  export type Validator = (meta: Metadata, explore: IExplore) => string[];

  export interface IOptions {
    escape: boolean;
    constant: boolean;
    absorb: boolean;
    functional?: boolean;
    validate?: Validator;
    onError?: (node: ts.Node | undefined, message: string) => void;
  }

  export interface IExplore {
    top: boolean;
    object: MetadataObject | null;
    property: string | object | null;
    nested: null | MetadataAlias | MetadataArrayType | MetadataTupleType;
    parameter: string | null;
    output: boolean;
    escaped: boolean;
    aliased: boolean;
  }

  export interface IError {
    name: string;
    explore: IExplore;
    messages: string[];
  }

  export const analyze =
    (checker: ts.TypeChecker, context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type | null): ValidationPipe<Metadata, IError> => {
      const errors: IError[] = [];
      const meta: Metadata = explore_metadata(checker)(options)(collection)(
        errors,
      )(type, {
        top: true,
        object: null,
        property: null,
        parameter: null,
        nested: null,
        aliased: false,
        escaped: false,
        output: false,
      });
      iterate_metadata_collection(errors)(collection);
      iterate_metadata_sort(collection)(meta);

      if (options.validate)
        errors.push(...validate(context)(options)(options.validate)(meta));
      return errors.length
        ? {
            success: false,
            errors,
          }
        : {
            success: true,
            data: meta,
          };
    };

  /**
   * @internal
   */
  export const soleLiteral = (value: string): Metadata => {
    const meta: Metadata = Metadata.initialize();
    meta.constants.push(
      MetadataConstant.from({
        values: [
          {
            value,
            tags: undefined,
          },
        ],
        type: "string",
      }),
    );
    return meta;
  };

  export const validate =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (functor: Validator) =>
    (meta: Metadata): IError[] => {
      const visitor: IValidationVisitor = {
        functor,
        errors: [],
        objects: new Set(),
        arrays: new Set(),
        tuples: new Set(),
        aliases: new Set(),
        functions: new Set(),
      };
      validateMeta(context)(options)(visitor)(meta, {
        object: null,
        property: null,
        parameter: null,
        nested: null,
        top: true,
        aliased: false,
        escaped: false,
        output: false,
      });
      return visitor.errors;
    };

  const validateMeta =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (meta: Metadata, explore: IExplore) => {
      const result: string[] = [];
      if (context !== undefined)
        for (const atomic of meta.atomics)
          for (const row of atomic.tags)
            for (const tag of row.filter(
              (t) => t.validate !== undefined && t.predicate === undefined,
            ))
              try {
                tag.predicate = ExpressionFactory.transpile(context)(
                  tag.validate!,
                );
              } catch {
                result.push(
                  `Unable to transpile type tag script: ${JSON.stringify(
                    tag.validate,
                  )}`,
                );
                tag.predicate = () => ts.factory.createTrue();
              }
      result.push(...visitor.functor(meta, explore));
      if (result.length)
        visitor.errors.push({
          name: meta.getName(),
          explore: { ...explore },
          messages: [...new Set(result)],
        });

      for (const alias of meta.aliases)
        validateAlias(context)(options)(visitor)(alias, explore);
      for (const array of meta.arrays)
        validateArray(context)(options)(visitor)(array.type, explore);
      for (const tuple of meta.tuples)
        validateTuple(context)(options)(visitor)(tuple.type, explore);
      for (const obj of meta.objects)
        validateObject(context)(options)(visitor)(obj);
      for (const func of meta.functions)
        validateFunction(context)(options)(visitor)(func, explore);
      for (const set of meta.sets)
        validateMeta(context)(options)(visitor)(set, explore);
      for (const map of meta.maps) {
        validateMeta(context)(options)(visitor)(map.key, explore);
        validateMeta(context)(options)(visitor)(map.value, explore);
      }

      if (options.escape === true && meta.escaped !== null)
        validateMeta(context)(options)(visitor)(meta.escaped.returns, {
          ...explore,
          escaped: true,
        });
    };

  const validateAlias =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (alias: MetadataAlias, explore: IExplore) => {
      if (visitor.aliases.has(alias)) return;
      visitor.aliases.add(alias);

      validateMeta(context)(options)(visitor)(alias.value, {
        ...explore,
        nested: alias,
        aliased: true,
      });
    };

  const validateArray =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (array: MetadataArrayType, explore: IExplore) => {
      if (visitor.arrays.has(array)) return;
      visitor.arrays.add(array);

      validateMeta(context)(options)(visitor)(array.value, {
        ...explore,
        nested: array,
        top: false,
      });
    };

  const validateTuple =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (tuple: MetadataTupleType, explore: IExplore) => {
      if (visitor.tuples.has(tuple)) return;
      visitor.tuples.add(tuple);

      for (const elem of tuple.elements)
        validateMeta(context)(options)(visitor)(elem, {
          ...explore,
          nested: tuple,
          top: false,
        });
    };

  const validateObject =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (object: MetadataObject) => {
      if (visitor.objects.has(object)) return;
      visitor.objects.add(object);

      if (options.validate) {
        const explore: IExplore = {
          object,
          top: false,
          property: null,
          parameter: null,
          nested: null,
          aliased: false,
          escaped: false,
          output: false,
        };
        const errors: string[] = options.validate(
          Metadata.create({
            ...Metadata.initialize(),
            objects: [object],
          }),
          explore,
        );
        if (errors.length)
          visitor.errors.push({
            name: object.name,
            explore,
            messages: [...new Set(errors)],
          });
      }

      for (const property of object.properties)
        validateMeta(context)(options)(visitor)(property.value, {
          object,
          property: property.key.isSoleLiteral()
            ? property.key.getSoleLiteral()!
            : {},
          parameter: null,
          nested: null,
          top: false,
          aliased: false,
          escaped: false,
          output: false,
        });
    };

  const validateFunction =
    (context?: ts.TransformationContext) =>
    (options: IOptions) =>
    (visitor: IValidationVisitor) =>
    (func: MetadataFunction, explore: IExplore) => {
      if (visitor.functions.has(func)) return;
      visitor.functions.add(func);

      for (const param of func.parameters)
        validateMeta(context)(options)(visitor)(param.type, {
          ...explore,
          parameter: param.name,
          nested: null,
          top: false,
          output: false,
        });
      if (func.output)
        validateMeta(context)(options)(visitor)(func.output, {
          ...explore,
          parameter: null,
          nested: null,
          top: false,
          output: true,
        });
    };

  interface IValidationVisitor {
    functor: Validator;
    errors: IError[];
    objects: Set<MetadataObject>;
    arrays: Set<MetadataArrayType>;
    tuples: Set<MetadataTupleType>;
    aliases: Set<MetadataAlias>;
    functions: Set<MetadataFunction>;
  }
}
