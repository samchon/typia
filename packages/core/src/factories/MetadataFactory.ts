import { ValidationPipe } from "@typia/interface";
import ts from "typescript";

import { MetadataAliasType } from "../schemas/metadata/MetadataAliasType";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataConstant } from "../schemas/metadata/MetadataConstant";
import { MetadataFunction } from "../schemas/metadata/MetadataFunction";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";
import { MetadataSchema } from "../schemas/metadata/MetadataSchema";
import { MetadataStorage } from "../schemas/metadata/MetadataStorage";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";
import { ExpressionFactory } from "./ExpressionFactory";
import { explore_metadata } from "./internal/metadata/explore_metadata";
import { iterate_metadata_collection } from "./internal/metadata/iterate_metadata_collection";
import { iterate_metadata_sort } from "./internal/metadata/iterate_metadata_sort";

/**
 * TypeScript type metadata analyzer.
 *
 * Analyzes TypeScript types and extracts metadata for code generation.
 * Core component for typia's compile-time type analysis.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace MetadataFactory {
  /** Validation function type for metadata schemas. */
  export type Validator = (meta: MetadataSchema, explore: IExplore) => string[];

  /** Properties for metadata analysis. */
  export interface IProps {
    /** TypeScript type checker. */
    checker: ts.TypeChecker;

    /** TypeScript transformation context. */
    transformer: ts.TransformationContext | undefined;

    /** Analysis options. */
    options: IOptions;

    /** Storage for collected metadata components. */
    components: MetadataStorage;

    /** Type to analyze. */
    type: ts.Type | null;
  }

  /** Options for metadata analysis. */
  export interface IOptions {
    /** Process escaped types. */
    escape: boolean;

    /** Extract constant values. */
    constant: boolean;

    /** Absorb union types. */
    absorb: boolean;

    /** Include function types. */
    functional?: boolean;

    /** Custom validation function. */
    validate?: Validator;

    /** Error callback. */
    onError?: (node: ts.Node | undefined, message: string) => void;
  }

  /** Type exploration context during analysis. */
  export interface IExplore {
    /** Whether at top-level type. */
    top: boolean;

    /** Current object type being explored. */
    object: MetadataObjectType | null;

    /** Current property key. */
    property: string | object | null;

    /** Nested type context. */
    nested: null | MetadataAliasType | MetadataArrayType | MetadataTupleType;

    /** Function parameter name. */
    parameter: string | null;

    /** Whether exploring return type. */
    output: boolean;

    /** Whether in escaped type. */
    escaped: boolean;

    /** Whether in aliased type. */
    aliased: boolean;
  }

  /** Metadata analysis error. */
  export interface IError {
    /** Type name where error occurred. */
    name: string;

    /** Exploration context at error. */
    explore: IExplore;

    /** Error messages. */
    messages: string[];
  }

  /**
   * Analyze TypeScript type and extract metadata.
   *
   * @param props Analysis properties
   * @returns Metadata schema or validation errors
   */
  export const analyze = (
    props: IProps,
  ): ValidationPipe<MetadataSchema, IError> => {
    const errors: IError[] = [];
    const metadata: MetadataSchema = explore_metadata({
      ...props,
      errors,
      explore: {
        top: true,
        object: null,
        property: null,
        parameter: null,
        nested: null,
        aliased: false,
        escaped: false,
        output: false,
      },
      intersected: false,
    });
    iterate_metadata_collection({
      errors,
      collection: props.components,
    });
    iterate_metadata_sort({
      collection: props.components,
      metadata: metadata,
    });

    if (props.options.validate)
      errors.push(
        ...validate({
          transformer: props.transformer,
          options: props.options,
          functor: props.options.validate,
          metadata,
        }),
      );
    return errors.length
      ? {
          success: false,
          errors,
        }
      : {
          success: true,
          data: metadata,
        };
  };

  /** @internal */
  export const soleLiteral = (value: string): MetadataSchema => {
    const meta: MetadataSchema = MetadataSchema.initialize();
    meta.constants.push(
      MetadataConstant.from({
        values: [
          {
            value,
            tags: [],
          },
        ],
        type: "string",
      }),
    );
    return meta;
  };

  /**
   * Validate metadata schema.
   *
   * @param props Validation properties
   * @returns Array of validation errors
   */
  export const validate = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    functor: Validator;
    metadata: MetadataSchema;
  }): IError[] => {
    const visitor: IValidationVisitor = {
      functor: props.functor,
      errors: [],
      objects: new Set(),
      arrays: new Set(),
      tuples: new Set(),
      aliases: new Set(),
      functions: new Set(),
    };
    validateMeta({
      ...props,
      visitor,
      explore: {
        object: null,
        property: null,
        parameter: null,
        nested: null,
        top: true,
        aliased: false,
        escaped: false,
        output: false,
      },
    });
    return visitor.errors;
  };

  const validateMeta = (props: {
    options: IOptions;
    visitor: IValidationVisitor;
    metadata: MetadataSchema;
    explore: IExplore;
  }) => {
    const result: string[] = [];
    for (const atomic of props.metadata.atomics)
      for (const row of atomic.tags)
        for (const tag of row.filter(
          (t) => t.validate !== undefined && t.predicate === undefined,
        ))
          try {
            tag.predicate = ExpressionFactory.transpile({
              script: tag.validate!,
            });
          } catch {
            result.push(
              `Unable to transpile type tag script: ${JSON.stringify(
                tag.validate,
              )}`,
            );
            tag.predicate = () => ts.factory.createTrue();
          }
    result.push(...props.visitor.functor(props.metadata, props.explore));
    if (result.length)
      props.visitor.errors.push({
        name: props.metadata.getName(),
        explore: { ...props.explore },
        messages: [...new Set(result)],
      });

    for (const alias of props.metadata.aliases)
      validateAlias({
        ...props,
        alias: alias.type,
      });
    for (const array of props.metadata.arrays)
      validateArray({
        ...props,
        array: array.type,
      });
    for (const tuple of props.metadata.tuples)
      validateTuple({
        ...props,
        tuple: tuple.type,
      });
    for (const object of props.metadata.objects)
      validateObject({
        ...props,
        object: object.type,
      });
    for (const func of props.metadata.functions)
      validateFunction({
        ...props,
        function: func,
      });
    for (const set of props.metadata.sets)
      validateMeta({
        ...props,
        metadata: set.value,
      });
    for (const map of props.metadata.maps) {
      validateMeta({
        ...props,
        metadata: map.key,
      });
      validateMeta({
        ...props,
        metadata: map.value,
      });
    }

    if (props.options.escape === true && props.metadata.escaped !== null)
      validateMeta({
        ...props,
        metadata: props.metadata.escaped.returns,
        explore: {
          ...props.explore,
          escaped: true,
        },
      });
  };

  const validateAlias = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    visitor: IValidationVisitor;
    alias: MetadataAliasType;
    explore: IExplore;
  }) => {
    if (props.visitor.aliases.has(props.alias)) return;
    props.visitor.aliases.add(props.alias);

    validateMeta({
      ...props,
      metadata: props.alias.value,
      explore: {
        ...props.explore,
        nested: props.alias,
        aliased: true,
      },
    });
  };

  const validateArray = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    visitor: IValidationVisitor;
    array: MetadataArrayType;
    explore: IExplore;
  }) => {
    if (props.visitor.arrays.has(props.array)) return;
    props.visitor.arrays.add(props.array);

    validateMeta({
      ...props,
      metadata: props.array.value,
      explore: {
        ...props.explore,
        nested: props.array,
        top: false,
      },
    });
  };

  const validateTuple = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    visitor: IValidationVisitor;
    tuple: MetadataTupleType;
    explore: IExplore;
  }) => {
    if (props.visitor.tuples.has(props.tuple)) return;
    props.visitor.tuples.add(props.tuple);

    for (const elem of props.tuple.elements)
      validateMeta({
        ...props,
        metadata: elem,
        explore: {
          ...props.explore,
          nested: props.tuple,
          top: false,
        },
      });
  };

  const validateObject = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    visitor: IValidationVisitor;
    object: MetadataObjectType;
  }) => {
    if (props.visitor.objects.has(props.object)) return;
    props.visitor.objects.add(props.object);

    if (props.options.validate) {
      const explore: IExplore = {
        object: props.object,
        top: false,
        property: null,
        parameter: null,
        nested: null,
        aliased: false,
        escaped: false,
        output: false,
      };
      const errors: string[] = props.options.validate(
        MetadataSchema.create({
          ...MetadataSchema.initialize(),
          objects: [
            MetadataObject.create({
              type: props.object,
              tags: [],
            }),
          ],
        }),
        explore,
      );
      if (errors.length)
        props.visitor.errors.push({
          name: props.object.name,
          explore,
          messages: [...new Set(errors)],
        });
    }

    for (const property of props.object.properties)
      validateMeta({
        ...props,
        metadata: property.value,
        explore: {
          object: props.object,
          property: property.key.isSoleLiteral()
            ? property.key.getSoleLiteral()!
            : {},
          parameter: null,
          nested: null,
          top: false,
          aliased: false,
          escaped: false,
          output: false,
        },
      });
  };

  const validateFunction = (props: {
    transformer?: ts.TransformationContext;
    options: IOptions;
    visitor: IValidationVisitor;
    function: MetadataFunction;
    explore: IExplore;
  }) => {
    if (props.visitor.functions.has(props.function)) return;
    props.visitor.functions.add(props.function);

    for (const param of props.function.parameters)
      validateMeta({
        ...props,
        metadata: param.type,
        explore: {
          ...props.explore,
          parameter: param.name,
          nested: null,
          top: false,
          output: false,
        },
      });
    if (props.function.output)
      validateMeta({
        ...props,
        metadata: props.function.output,
        explore: {
          ...props.explore,
          parameter: null,
          nested: null,
          top: false,
          output: true,
        },
      });
  };

  interface IValidationVisitor {
    functor: Validator;
    errors: IError[];
    objects: Set<MetadataObjectType>;
    arrays: Set<MetadataArrayType>;
    tuples: Set<MetadataTupleType>;
    aliases: Set<MetadataAliasType>;
    functions: Set<MetadataFunction>;
  }
}
