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

import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { PruneJoiner } from "../helpers/PruneJoiner";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace MiscPruneProgrammer {
  export const decompose = (props: {
    validated: boolean;
    project: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config = configure(props.project)(props.importer);
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
        composed.response,
        undefined,
        composed.body,
      ),
    };
  };

  export const write =
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        validated: false,
        project,
        importer,
        type,
        name,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
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
    (project: ITypiaContext) =>
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
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      meta: Metadata,
      explore: FeatureProgrammer.IExplore,
    ): ts.ConciseBody => {
      if (filter(meta) === false) return ts.factory.createBlock([]);

      interface IUnion {
        type: string;
        is: () => ts.Expression;
        value: () => ts.Expression | ts.Block | ts.ReturnStatement;
      }
      const unions: IUnion[] = [];

      //----
      // LIST UP UNION TYPES
      //----
      // TUPLES
      for (const tuple of meta.tuples.filter((tuple) =>
        tuple.type.elements.some((e) => filter(e.rest ?? e)),
      ))
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
      if (meta.arrays.filter((a) => filter(a.type.value)).length)
        unions.push({
          type: "array",
          is: () => ExpressionFactory.isArray(input),
          value: () =>
            explore_arrays(project)(config)(importer)(input, meta.arrays, {
              ...explore,
              from: "array",
            }),
        });

      // BUILT-IN CLASSES
      if (meta.natives.length)
        for (const native of meta.natives)
          unions.push({
            type: "native",
            is: () => ExpressionFactory.isInstanceOf(native)(input),
            value: () => ts.factory.createReturnStatement(),
          });
      if (meta.sets.length)
        unions.push({
          type: "set",
          is: () => ExpressionFactory.isInstanceOf("Set")(input),
          value: () => ts.factory.createReturnStatement(),
        });
      if (meta.maps.length)
        unions.push({
          type: "map",
          is: () => ExpressionFactory.isInstanceOf("Map")(input),
          value: () => ts.factory.createReturnStatement(),
        });

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

      //----
      // STATEMENTS
      //----
      const converter = (v: ts.Expression | ts.Block | ts.ReturnStatement) =>
        ts.isReturnStatement(v) || ts.isBlock(v)
          ? v
          : ts.factory.createExpressionStatement(v);

      const statements: ts.Statement[] = unions.map((u) =>
        ts.factory.createIfStatement(u.is(), converter(u.value())),
      );
      return ts.factory.createBlock(statements, true);
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
    ): ts.Expression =>
      FeatureProgrammer.decode_array(config)(importer)(PruneJoiner.array)(
        input,
        array,
        explore,
      );

  const decode_tuple =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTuple,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression | ts.Block =>
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
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTupleType,
      explore: FeatureProgrammer.IExplore,
    ): ts.Block => {
      const children: ts.ConciseBody[] = tuple.elements
        .map((elem, index) => [elem, index] as const)
        .filter(([elem]) => filter(elem) && elem.rest === null)
        .map(([elem, index]) =>
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
        if (rest === null || filter(rest) === false) return null;

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
      return PruneJoiner.tuple(children, rest);
    };

  /* -----------------------------------------------------------
        UNION TYPE EXPLORERS
    ----------------------------------------------------------- */
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
    (project: ITypiaContext) =>
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
          empty: ts.factory.createStringLiteral("[]"),
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

  // @todo -> must filter out recursive visit
  const filter = (meta: Metadata): boolean =>
    meta.any === false &&
    (meta.objects.length !== 0 ||
      meta.tuples.some(
        (t) =>
          !!t.type.elements.length &&
          t.type.elements.some((e) => filter(e.rest ?? e)),
      ) ||
      meta.arrays.some((e) => filter(e.type.value)));

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "$p";

  const configure =
    (project: ITypiaContext) =>
    (importer: FunctionImporter): FeatureProgrammer.IConfig => {
      const config: FeatureProgrammer.IConfig = {
        types: {
          input: (type, name) =>
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          output: () => TypeFactory.keyword("void"),
        },
        prefix: PREFIX,
        trace: false,
        path: false,
        initializer,
        decoder: () => decode(project)(config)(importer),
        objector: {
          checker: () => IsProgrammer.decode(project)(importer),
          decoder: () => decode_object(importer),
          joiner: PruneJoiner.object,
          unionizer: decode_union_object(
            IsProgrammer.decode_object(project)(importer),
          )(decode_object(importer))((exp) => exp)((value, expected) =>
            create_throw_error(importer)(expected)(value),
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
        project.transformer,
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
}
