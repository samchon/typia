import ts from "typescript";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_bigint } from "./check_bigint";
import { check_number } from "./check_number";
import { check_string } from "./check_string";
import { check_template } from "./check_template";

export const check_dynamic_key =
  (project: IProject) =>
  (importer: FunctionImporter) =>
  (input: ts.Expression, metadata: Metadata): ts.Expression => {
    // IF PURE STRING EXISTS, THEN SKIP VALIDATION
    if (
      (metadata.atomics.length !== 0 &&
        metadata.atomics.some(
          (a) =>
            a.type === "string" &&
            a.tags.filter((row) => row.every((t) => t.validate !== undefined))
              .length === 0,
        )) ||
      (metadata.natives.length !== 0 &&
        metadata.natives.some((type) => type === "String"))
    )
      return ts.factory.createTrue();

    const conditions: ts.Expression[] = [];

    // NULLISH COALESCING
    if (metadata.nullable === true)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral("null"),
          input,
        ),
      );
    if (metadata.isRequired() === false)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral("undefined"),
          input,
        ),
      );

    // ATOMICS
    for (const atom of metadata.atomics)
      if (atom.type === "boolean")
        conditions.push(
          ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("false"),
              input,
            ),
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("true"),
              input,
            ),
          ),
        );
      else if (atom.type === "bigint")
        conditions.push(
          ts.factory.createLogicalAnd(
            ts.factory.createCallExpression(
              importer.use("is_bigint_string"),
              undefined,
              [input],
            ),
            atomist(
              check_bigint(project)(atom)(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("BigInt"),
                  undefined,
                  [input],
                ),
              ),
            ),
          ),
        );
      else if (atom.type === "number")
        conditions.push(
          atomist(
            check_number(project, true)(atom)(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("Number"),
                undefined,
                [input],
              ),
            ),
          ),
        );
      else conditions.push(atomist(check_string(project)(atom)(input)));

    // CONSTANTS
    for (const constant of metadata.constants)
      for (const value of constant.values)
        conditions.push(
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral(String(value)),
            input,
          ),
        );

    // TEMPLATES
    if (!!metadata.templates.length)
      conditions.push(atomist(check_template(metadata.templates)(input)));

    // NATIVES
    for (const native of metadata.natives)
      if (native === "Boolean")
        conditions.push(
          ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("false"),
              input,
            ),
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("true"),
              input,
            ),
          ),
        );
      else if (native === "BigInt")
        conditions.push(
          ts.factory.createCallExpression(
            importer.use("is_bigint_string"),
            undefined,
            [input],
          ),
        );
      else if (native === "Number")
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
                  [input],
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
