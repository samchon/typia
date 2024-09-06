import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { StringUtil } from "../../utils/StringUtil";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { NotationJoiner } from "../helpers/NotationJoiner";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace NotationGeneralProgrammer {
  export const returnType =
    (rename: (str: string) => string) => (type: string) =>
      `typia.${StringUtil.capitalize(rename.name)}Case<${type}>`;

  export const decompose = (props: {
    rename: (str: string) => string;
    validated: boolean;
    project: IProject;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config = configure(props.rename)(props.project)(props.importer);
    if (props.validated === false)
      config.addition = (collection) =>
        IsProgrammer.write_function_statements(props.project)(props.importer)(
          collection,
        );
    const composed: FeatureProgrammer.IComposed = FeatureProgrammer.compose({
      ...props,
      config,
    });
    return {
      functions: composed.functions,
      statements: composed.statements,
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        composed.parameters,
        ts.factory.createTypeReferenceNode(
          returnType(props.rename)(
            props.name ??
              TypeFactory.getFullName(props.project.checker)(props.type),
          ),
        ),
        undefined,
        composed.body,
      ),
    };
  };

  export const write =
    (rename: (str: string) => string) =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string) => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        rename,
        validated: true,
        project,
        importer,
        type,
        name,
      });
      return FeatureProgrammer.writeDecomposed({
        importer,
        modulo,
        result,
      });
    };

  const write_array_functions =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .arrays()
        .filter((a) => a.recursive)
        .map((type, i) =>
          StatementFactory.constant(
            `${config.prefix}a${i}`,
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              FeatureProgrammer.parameterDeclarations(config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
              TypeFactory.keyword("any"),
              undefined,
              decode_array_inline(config)(importer)(
                ts.factory.createIdentifier("input"),
                MetadataArray.create({
                  type,
                  tags: [],
                }),
                {
                  tracable: config.trace,
                  source: "function",
                  from: "array",
                  postfix: "",
                },
              ),
            ),
          ),
        );

  const write_tuple_functions =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .tuples()
        .filter((t) => t.recursive)
        .map((tuple, i) =>
          StatementFactory.constant(
            `${config.prefix}t${i}`,
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              FeatureProgrammer.parameterDeclarations(config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
              TypeFactory.keyword("any"),
              undefined,
              decode_tuple_inline(project)(config)(importer)(
                ts.factory.createIdentifier("input"),
                tuple,
                {
                  tracable: config.trace,
                  source: "function",
                  from: "array",
                  postfix: "",
                },
              ),
            ),
          ),
        );

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  const decode =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      meta: Metadata,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      // ANY TYPE
      if (
        meta.any ||
        meta.arrays.some((a) => a.type.value.any) ||
        meta.tuples.some(
          (t) =>
            !!t.type.elements.length && t.type.elements.every((e) => e.any),
        )
      )
        return ts.factory.createCallExpression(importer.use("any"), undefined, [
          input,
        ]);

      interface IUnion {
        type: string;
        is: () => ts.Expression;
        value: () => ts.Expression;
      }
      const unions: IUnion[] = [];

      //----
      // LIST UP UNION TYPES
      //----
      // FUNCTIONAL
      if (meta.functions.length)
        unions.push({
          type: "functional",
          is: () =>
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("function"),
              ts.factory.createTypeOfExpression(input),
            ),
          value: () => ts.factory.createIdentifier("undefined"),
        });

      // TUPLES
      for (const tuple of meta.tuples)
        unions.push({
          type: "tuple",
          is: () =>
            IsProgrammer.decode(project)(importer)(
              input,
              (() => {
                const partial = Metadata.initialize();
                partial.tuples.push(tuple);
                return partial;
              })(),
              explore,
            ),
          value: () =>
            decode_tuple(project)(config)(importer)(input, tuple, explore),
        });

      // ARRAYS
      if (meta.arrays.length)
        unions.push({
          type: "array",
          is: () => ExpressionFactory.isArray(input),
          value: () =>
            explore_arrays(project)(config)(importer)(input, meta.arrays, {
              ...explore,
              from: "array",
            }),
        });

      // NATIVE TYPES
      if (meta.sets.length)
        unions.push({
          type: "set",
          is: () => ExpressionFactory.isInstanceOf("Set")(input),
          value: () =>
            explore_sets(project)(config)(importer)(input, meta.sets, {
              ...explore,
              from: "array",
            }),
        });
      if (meta.maps.length)
        unions.push({
          type: "map",
          is: () => ExpressionFactory.isInstanceOf("Map")(input),
          value: () =>
            explore_maps(project)(config)(importer)(input, meta.maps, {
              ...explore,
              from: "array",
            }),
        });
      for (const native of meta.natives) {
        if (native === "WeakSet" || native === "WeakMap") continue;
        unions.push({
          type: "native",
          is: () => ExpressionFactory.isInstanceOf(native)(input),
          value: () =>
            native === "Boolean" || native === "Number" || native === "String"
              ? ts.factory.createCallExpression(
                  IdentifierFactory.access(input)("valueOf"),
                  undefined,
                  undefined,
                )
              : decode_native(native)(input),
        });
      }

      // OBJECTS
      if (meta.objects.length)
        unions.push({
          type: "object",
          is: () =>
            ExpressionFactory.isObject({
              checkNull: true,
              checkArray: false,
            })(input),
          value: () =>
            explore_objects(config)(importer)(input, meta, {
              ...explore,
              from: "object",
            }),
        });

      // COMPOSITION
      if (unions.length === 0) return input;
      else if (unions.length === 1 && meta.size() === 1) {
        const value: ts.Expression =
          (meta.nullable || meta.isRequired() === false) && is_instance(meta)
            ? ts.factory.createConditionalExpression(
                input,
                undefined,
                unions[0]!.value(),
                undefined,
                input,
              )
            : unions[0]!.value();
        return ts.factory.createAsExpression(value, TypeFactory.keyword("any"));
      } else {
        let last: ts.Expression = input;
        for (const u of unions.reverse())
          last = ts.factory.createConditionalExpression(
            u.is(),
            undefined,
            u.value(),
            undefined,
            last,
          );
        return ts.factory.createAsExpression(last, TypeFactory.keyword("any"));
      }
    };

  const decode_object = (importer: FunctionImporter) =>
    FeatureProgrammer.decode_object({
      trace: false,
      path: false,
      prefix: PREFIX,
    })(importer);

  const decode_array =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      array: MetadataArray,
      explore: FeatureProgrammer.IExplore,
    ) =>
      array.type.recursive
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${config.prefix}a${array.type.index}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)({
              ...explore,
              source: "function",
              from: "array",
            })(input),
          )
        : decode_array_inline(config)(importer)(input, array, explore);

  const decode_array_inline =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      array: MetadataArray,
      explore: FeatureProgrammer.IExplore,
    ) =>
      FeatureProgrammer.decode_array(config)(importer)(NotationJoiner.array)(
        input,
        array,
        explore,
      );

  const decode_tuple =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTuple,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      tuple.type.recursive
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${config.prefix}t${tuple.type.index}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)({
              ...explore,
              source: "function",
            })(input),
          )
        : decode_tuple_inline(project)(config)(importer)(
            input,
            tuple.type,
            explore,
          );

  const decode_tuple_inline =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTupleType,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      const children: ts.Expression[] = tuple.elements
        .filter((m) => m.rest === null)
        .map((elem, index) =>
          decode(project)(config)(importer)(
            ts.factory.createElementAccessExpression(input, index),
            elem,
            {
              ...explore,
              from: "array",
              postfix: explore.postfix.length
                ? `${postfix_of_tuple(explore.postfix)}[${index}]"`
                : `"[${index}]"`,
            },
          ),
        );
      const rest = (() => {
        if (tuple.elements.length === 0) return null;

        const last: Metadata = tuple.elements.at(-1)!;
        const rest: Metadata | null = last.rest;
        if (rest === null) return null;

        return decode(project)(config)(importer)(
          ts.factory.createCallExpression(
            IdentifierFactory.access(input)("slice"),
            undefined,
            [ExpressionFactory.number(tuple.elements.length - 1)],
          ),
          wrap_metadata_rest_tuple(tuple.elements.at(-1)!.rest!),
          {
            ...explore,
            start: tuple.elements.length - 1,
          },
        );
      })();
      return NotationJoiner.tuple(children, rest);
    };

  /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
  const decode_native = (type: string) => (input: ts.Expression) =>
    type === "Date"
      ? ts.factory.createNewExpression(
          ts.factory.createIdentifier(type),
          undefined,
          [input],
        )
      : input;

  /* -----------------------------------------------------------
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
  const explore_sets =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      sets: Metadata[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      ts.factory.createCallExpression(
        UnionExplorer.set({
          checker: IsProgrammer.decode(project)(importer),
          decoder: (input, array, explore) =>
            ts.factory.createNewExpression(
              ts.factory.createIdentifier("Set"),
              [TypeFactory.keyword("any")],
              [decode_array(config)(importer)(input, array, explore)],
            ),
          empty: ts.factory.createNewExpression(
            ts.factory.createIdentifier("Set"),
            [TypeFactory.keyword("any")],
            [],
          ),
          success: ts.factory.createTrue(),
          failure: (input, expected) =>
            create_throw_error(importer)(expected)(input),
        })([])(input, sets, explore),
        undefined,
        undefined,
      );

  const explore_maps =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      maps: Metadata.Entry[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      ts.factory.createCallExpression(
        UnionExplorer.map({
          checker: (top, entry, explore) => {
            const func = IsProgrammer.decode(project)(importer);
            return ts.factory.createLogicalAnd(
              func(ts.factory.createElementAccessExpression(top, 0), entry[0], {
                ...explore,
                postfix: `${explore.postfix}[0]`,
              }),
              func(ts.factory.createElementAccessExpression(top, 1), entry[1], {
                ...explore,
                postfix: `${explore.postfix}[1]`,
              }),
            );
          },
          decoder: (input, array, explore) =>
            ts.factory.createNewExpression(
              ts.factory.createIdentifier("Map"),
              [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
              [decode_array(config)(importer)(input, array, explore)],
            ),
          empty: ts.factory.createNewExpression(
            ts.factory.createIdentifier("Map"),
            [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
            [],
          ),
          success: ts.factory.createTrue(),
          failure: (input, expected) =>
            create_throw_error(importer)(expected)(input),
        })([])(input, maps, explore),
        undefined,
        undefined,
      );

  const explore_objects =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      meta: Metadata,
      explore: FeatureProgrammer.IExplore,
    ) => {
      if (meta.objects.length === 1)
        return decode_object(importer)(input, meta.objects[0]!, explore);

      return ts.factory.createCallExpression(
        ts.factory.createIdentifier(
          importer.useLocal(`${PREFIX}u${meta.union_index!}`),
        ),
        undefined,
        FeatureProgrammer.argumentsArray(config)(explore)(input),
      );
    };

  const explore_arrays =
    (project: IProject) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      elements: MetadataArray[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      explore_array_like_union_types(config)(importer)(
        UnionExplorer.array({
          checker: IsProgrammer.decode(project)(importer),
          decoder: decode_array(config)(importer),
          empty: ts.factory.createIdentifier("[]"),
          success: ts.factory.createTrue(),
          failure: (input, expected) =>
            create_throw_error(importer)(expected)(input),
        }),
      )(input, elements, explore);

  const explore_array_like_union_types =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    <T extends MetadataArray | MetadataTuple>(
      factory: (
        parameters: ts.ParameterDeclaration[],
      ) => (
        input: ts.Expression,
        elements: T[],
        explore: FeatureProgrammer.IExplore,
      ) => ts.ArrowFunction,
    ) =>
    (
      input: ts.Expression,
      elements: T[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      const arrow =
        (parameters: ts.ParameterDeclaration[]) =>
        (explore: FeatureProgrammer.IExplore) =>
        (input: ts.Expression): ts.ArrowFunction =>
          factory(parameters)(input, elements, explore);
      if (elements.every((e) => e.type.recursive === false))
        ts.factory.createCallExpression(
          arrow([])(explore)(input),
          undefined,
          [],
        );

      explore = {
        ...explore,
        source: "function",
        from: "array",
      };
      return ts.factory.createCallExpression(
        ts.factory.createIdentifier(
          importer.emplaceUnion(
            config.prefix,
            elements.map((e) => e.type.name).join(" | "),
            () =>
              arrow(
                FeatureProgrammer.parameterDeclarations(config)(
                  TypeFactory.keyword("any"),
                )(ts.factory.createIdentifier("input")),
              )({
                ...explore,
                postfix: "",
              })(ts.factory.createIdentifier("input")),
          ),
        ),
        undefined,
        FeatureProgrammer.argumentsArray(config)(explore)(input),
      );
    };

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "$c";

  const configure =
    (rename: (str: string) => string) =>
    (project: IProject) =>
    (importer: FunctionImporter): FeatureProgrammer.IConfig => {
      const config: FeatureProgrammer.IConfig = {
        types: {
          input: (type, name) =>
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          output: (type, name) =>
            ts.factory.createTypeReferenceNode(
              returnType(rename)(
                name ?? TypeFactory.getFullName(project.checker)(type),
              ),
            ),
        },
        prefix: PREFIX,
        trace: false,
        path: false,
        initializer,
        decoder: () => decode(project)(config)(importer),
        objector: {
          checker: () => IsProgrammer.decode(project)(importer),
          decoder: () => decode_object(importer),
          joiner: NotationJoiner.object(rename),
          unionizer: decode_union_object(
            IsProgrammer.decode_object(project)(importer),
          )(decode_object(importer))((exp) => exp)((input, expected) =>
            create_throw_error(importer)(expected)(input),
          ),
          failure: (input, expected) =>
            create_throw_error(importer)(expected)(input),
        },
        generator: {
          arrays: () => write_array_functions(config)(importer),
          tuples: () => write_tuple_functions(project)(config)(importer),
        },
      };
      return config;
    };

  const initializer: FeatureProgrammer.IConfig["initializer"] =
    (project) => (importer) => (type) => {
      const collection = new MetadataCollection();
      const result = MetadataFactory.analyze(
        project.checker,
        project.context,
      )({
        escape: false,
        constant: true,
        absorb: true,
      })(collection)(type);
      if (result.success === false)
        throw TransformerError.from(`typia.misc.${importer.method}`)(
          result.errors,
        );
      return [collection, result.data];
    };

  const create_throw_error =
    (importer: FunctionImporter) =>
    (expected: string) =>
    (value: ts.Expression) =>
      ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
          importer.use("throws"),
          [],
          [
            ts.factory.createObjectLiteralExpression(
              [
                ts.factory.createPropertyAssignment(
                  "expected",
                  ts.factory.createStringLiteral(expected),
                ),
                ts.factory.createPropertyAssignment("value", value),
              ],
              true,
            ),
          ],
        ),
      );

  const is_instance = (meta: Metadata): boolean =>
    !!meta.objects.length ||
    !!meta.arrays.length ||
    !!meta.tuples.length ||
    !!meta.sets.length ||
    !!meta.maps.length ||
    !!meta.natives.length ||
    (meta.rest !== null && is_instance(meta.rest));
}
