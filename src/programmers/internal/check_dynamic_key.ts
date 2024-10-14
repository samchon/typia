import ts from "typescript";

import { Metadata } from "../../schemas/metadata/Metadata";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_bigint } from "./check_bigint";
import { check_number } from "./check_number";
import { check_string } from "./check_string";
import { check_template } from "./check_template";

/**
 * @internal
 */
export const check_dynamic_key = (props: {
  context: ITypiaContext;
  metadata: Metadata;
  input: ts.Expression;
}): ts.Expression => {
  // IF PURE STRING EXISTS, THEN SKIP VALIDATION
  if (
    (props.metadata.atomics.length !== 0 &&
      props.metadata.atomics.some(
        (a) =>
          a.type === "string" &&
          a.tags.filter((row) => row.every((t) => t.validate !== undefined))
            .length === 0,
      )) ||
    (props.metadata.natives.length !== 0 &&
      props.metadata.natives.some((native) => native.name === "String"))
  )
    return ts.factory.createTrue();

  const conditions: ts.Expression[] = [];

  // NULLISH COALESCING
  if (props.metadata.nullable === true)
    conditions.push(
      ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("null"),
        props.input,
      ),
    );
  if (props.metadata.isRequired() === false)
    conditions.push(
      ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("undefined"),
        props.input,
      ),
    );

  // ATOMICS
  for (const atom of props.metadata.atomics)
    if (atom.type === "boolean")
      conditions.push(
        ts.factory.createLogicalOr(
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("false"),
            props.input,
          ),
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("true"),
            props.input,
          ),
        ),
      );
    else if (atom.type === "bigint")
      conditions.push(
        ts.factory.createLogicalAnd(
          ts.factory.createCallExpression(
            props.context.importer.internal("isBigintString"),
            undefined,
            [props.input],
          ),
          atomist(
            check_bigint({
              context: props.context,
              atomic: atom,
              input: ts.factory.createCallExpression(
                ts.factory.createIdentifier("BigInt"),
                undefined,
                [props.input],
              ),
            }),
          ),
        ),
      );
    else if (atom.type === "number")
      conditions.push(
        atomist(
          check_number({
            context: props.context,
            numeric: true,
            atomic: atom,
            input: ts.factory.createCallExpression(
              ts.factory.createIdentifier("Number"),
              undefined,
              [props.input],
            ),
          }),
        ),
      );
    else
      conditions.push(
        atomist(
          check_string({
            context: props.context,
            atomic: atom,
            input: props.input,
          }),
        ),
      );

  // CONSTANTS
  for (const constant of props.metadata.constants)
    for (const { value } of constant.values)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral(String(value)),
          props.input,
        ),
      );

  // TEMPLATES
  if (!!props.metadata.templates.length)
    conditions.push(
      atomist(
        check_template({
          templates: props.metadata.templates,
          input: props.input,
        }),
      ),
    );

  // NATIVES
  for (const native of props.metadata.natives)
    if (native.name === "Boolean")
      conditions.push(
        ts.factory.createLogicalOr(
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("false"),
            props.input,
          ),
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("true"),
            props.input,
          ),
        ),
      );
    else if (native.name === "BigInt")
      conditions.push(
        ts.factory.createCallExpression(
          props.context.importer.internal("isBigintString"),
          undefined,
          [props.input],
        ),
      );
    else if (native.name === "Number")
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createFalse(),
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("Number.isNaN"),
            undefined,
            [
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Number"),
                undefined,
                [props.input],
              ),
            ],
          ),
        ),
      );

  return conditions.length === 0
    ? ts.factory.createTrue()
    : conditions.length === 1
      ? conditions[0]!
      : conditions.reduce(ts.factory.createLogicalOr);
};

/**
 * @internal
 */
const atomist = (entry: ICheckEntry) =>
  [
    ...(entry.expression ? [entry.expression] : []),
    ...(entry.conditions.length === 0
      ? []
      : [
          entry.conditions
            .map((set) =>
              set
                .map((s) => s.expression)
                .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
            )
            .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
        ]),
  ].reduce((x, y) => ts.factory.createLogicalAnd(x, y));
