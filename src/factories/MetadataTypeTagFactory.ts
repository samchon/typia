import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../schemas/metadata/MetadataProperty";

import { MetadataFactory } from "./MetadataFactory";
import { MetadataTypeTagSchemaFactory } from "./MetadataTypeTagSchemaFactory";

export namespace MetadataTypeTagFactory {
  export const is = (obj: MetadataObjectType): boolean => {
    if (obj.properties.length !== 1) return false;

    const top: MetadataProperty = obj.properties[0]!;
    if (top.key.isSoleLiteral() === false) return false;
    else if (top.key.getSoleLiteral() !== "typia.tag") return false;

    const value: Metadata = top.value;
    if (
      value.size() !== 1 ||
      value.objects.length !== 1 ||
      value.isRequired() === true ||
      value.nullable === true
    )
      return false;

    const tag: MetadataObjectType = top.value.objects[0]!.type;
    const statics: string[] = tag.properties
      .map((p) => p.key.getSoleLiteral()!)
      .filter((str) => str !== null);
    if (ESSENTIAL_FIELDS.some((f) => !statics.includes(f))) return false;
    return true;
  };

  export const analyze = (props: {
    errors: MetadataFactory.IError[];
    type: "boolean" | "bigint" | "number" | "string" | "array" | "object";
    objects: MetadataObjectType[];
    explore: MetadataFactory.IExplore;
  }): IMetadataTypeTag[] => {
    const messages: string[] = [];
    const report = (next: {
      property: string | null;
      message: string;
    }): false => {
      messages.push(
        `the property ${
          next.property === null
            ? `["typia.tag"]`
            : `["typia.tag.${next.property}"]`
        } ${next.message}.`,
      );
      return false;
    };

    //----
    // VALIDATION PROCESS
    //----
    const filtered: MetadataObjectType[] = props.objects.filter((obj) => {
      // ONLY ONE PROPERTY
      if (obj.properties.length !== 1) return false;

      // THE TAG.TYPE PROPERTY MUST BE
      const top: MetadataProperty = obj.properties[0]!;
      if (
        top.key.getSoleLiteral() !== "typia.tag" ||
        top.value.size() !== 1 ||
        top.value.objects.length !== 1
      )
        return false;
      else if (top.value.optional === false)
        return report({
          property: null,
          message: "must be optional object",
        });

      // CHECK LIST OF PROPERTIES
      const tag: MetadataObjectType = top.value.objects[0]!.type;
      const statistics: string[] = tag.properties
        .map((p) => p.key.getSoleLiteral()!)
        .filter((str) => str !== null);
      if (ESSENTIAL_FIELDS.some((f) => !statistics.includes(f)))
        return report({
          property: null,
          message: `must have at least three properties - ${ESSENTIAL_FIELDS.map(
            (str) => `'${str}'`,
          ).join(", ")}`,
        });

      const each: boolean[] = tag.properties.map((p) => {
        const key: string | null = p.key.getSoleLiteral();
        if (key === null) return true;
        else if (FIELDS.includes(key) === false) return true;
        return validate_property({
          report,
          key,
          value: p.value,
        });
      });
      return each.every((v) => v === true);
    });
    if (filtered.length === 0) return [];

    //----
    // CONSTRUCT TYPE TAGS
    //----
    // CREATE 1ST
    const tagList: Array<ITypeTag | null> = filtered.map((object) =>
      create_metadata_type_tag({
        report,
        object,
      }),
    );

    const output: IMetadataTypeTag[] = [];
    for (const tag of tagList)
      if (tag !== null)
        output.push({
          target: tag.target.some((str) => str === props.type)
            ? props.type
            : null!,
          name: tag.name,
          kind: tag.kind,
          value: tag.value,
          validate: tag.validate[props.type]!,
          exclusive: tag.exclusive,
          schema: tag.schema,
        });
    validate({
      report,
      type: props.type,
      tags: output,
    });

    if (messages.length > 0) {
      props.errors.push({
        name: [props.type, ...props.objects.map((o) => o.name)].join(" & "),
        explore: props.explore,
        messages,
      });
      return [];
    }
    return output;
  };

  export const validate = (props: {
    report: (next: { property: string | null; message: string }) => false;
    type: "boolean" | "bigint" | "number" | "string" | "array" | "object";
    tags: IMetadataTypeTag[];
  }): boolean => {
    let success: boolean = true;
    for (const tag of props.tags)
      if (tag.target !== props.type) {
        success &&= props.report({
          property: null,
          message: `target must contain ${props.type} type`,
        });
      }

    props.tags.forEach((tag, i) => {
      if (tag.exclusive === false) return;
      else if (tag.exclusive === true) {
        const some: boolean = props.tags.some(
          (opposite, j) => i !== j && opposite.kind === tag.kind,
        );
        if (some === true)
          success &&= props.report({
            property: null,
            message: `kind '${tag.kind}' can't be duplicated`,
          });
      } else if (Array.isArray(tag.exclusive)) {
        const some: IMetadataTypeTag | undefined = props.tags.find(
          (opposite, j) =>
            i !== j &&
            opposite.kind === tag.kind &&
            (tag.exclusive as string[]).includes(opposite.name),
        );
        if (some !== undefined)
          success ??= props.report({
            property: null,
            message: `kind '${tag.kind}' can't be used with '${some.name}'`,
          });
      }
    });
    return success;
  };

  const validate_property = (props: {
    report: (next: { property: string | null; message: string }) => false;
    key: string;
    value: Metadata;
  }): boolean => {
    if (
      // TARGET
      props.key === "target" &&
      (props.value.constants.length !== 1 ||
        props.value.constants[0]!.values.length !== props.value.size() ||
        props.value.constants[0]!.values.some(
          (v) =>
            v.value !== "boolean" &&
            v.value !== "bigint" &&
            v.value !== "number" &&
            v.value !== "string" &&
            v.value !== "array" &&
            v.value !== "object",
        ))
    )
      return props.report({
        property: props.key,
        message: `must be one of 'boolean', 'bigint', 'number', 'string', 'array', 'object'`,
      });
    else if (
      // KIND
      props.key === "kind" &&
      (props.value.size() !== 1 ||
        props.value.constants.length !== 1 ||
        props.value.constants[0]!.type !== "string" ||
        props.value.constants[0]!.values.length !== 1)
    )
      return props.report({
        property: props.key,
        message: "must be a string literal type",
      });
    else if (
      // VALUE
      props.key === "value" &&
      !(
        (props.value.size() === 0 && props.value.isRequired() === false) ||
        (props.value.size() === 1 &&
          (props.value.objects.length === 1 ||
            props.value.constants.length === 1))
      )
    )
      return props.report({
        property: props.key,
        message: "must be a literal type or undefined value",
      });
    else if (props.key === "exclusive") return get_exclusive(props) !== null;
    else if (props.key === "validate") {
      //----
      // VALIDATE
      //----
      // UNDEFINED CASE
      if (
        props.value.size() === 0 &&
        props.value.isRequired() === false &&
        props.value.nullable === false
      )
        return true;

      // STRING CASE
      if (
        props.value.size() === 1 &&
        props.value.constants.length === 1 &&
        props.value.constants[0]!.type === "string" &&
        (props.value.constants[0]!.values.length === 1) === true
      )
        return true;

      // RECORD<TARGET, STRING>
      const target: string[] | undefined =
        props.value.objects[0]?.type.properties
          .map((p) => p.key.getSoleLiteral()!)
          .filter((str) => str !== null) as string[] | undefined;
      if (target === undefined)
        return props.report({
          property: "target",
          message: `must be one of 'boolean', 'bigint', 'number', 'string', 'array', 'object`,
        });
      const variadic: boolean =
        props.value.size() === 1 &&
        props.value.objects.length === 1 &&
        props.value.objects[0]!.type.properties.every(
          (vp) =>
            vp.value.size() === 1 &&
            vp.value.isRequired() &&
            vp.value.nullable === false &&
            vp.value.constants.length === 1 &&
            vp.value.constants[0]!.type === "string" &&
            vp.value.constants[0]!.values.length === 1 &&
            target.includes(vp.key.getSoleLiteral()!),
        );
      if (variadic === false)
        return props.report({
          property: props.key,
          message: `must be a string literal type or Record<Target, string> type.`,
        });
    }
    return true;
  };

  const create_metadata_type_tag = (props: {
    report: (next: { property: string | null; message: string }) => false;
    object: MetadataObjectType;
  }): ITypeTag | null => {
    const find = (key: string): MetadataProperty | undefined =>
      props.object.properties[0]?.value.objects[0]?.type.properties.find(
        (p) => p.key.getSoleLiteral() === key,
      );

    const target = find("target")!.value.constants[0]!.values.map(
      (v) => v.value,
    ) as ITypeTag["target"];
    const kind: string = find("kind")!.value.constants[0]!.values[0]!
      .value as string;
    const value: boolean | bigint | number | string | undefined =
      find("value")?.value.constants[0]?.values[0]!.value;
    const exclusive: string[] | boolean | null = get_exclusive({
      report: props.report,
      key: "exclusive",
      value: find("exclusive")?.value,
    });
    if (exclusive === null) return null;

    const validate: Record<string, string> = (() => {
      const validate = find("validate")?.value;
      if (!validate || validate.size() === 0) return {};
      else if (validate.constants.length)
        return Object.fromEntries(
          target.map((t) => [
            t,
            validate.constants[0]!.values[0]!.value as string,
          ]),
        );
      return Object.fromEntries(
        validate.objects[0]!.type.properties.map((p) => [
          p.key.getSoleLiteral()!,
          p.value.constants[0]!.values[0]!.value as string,
        ]),
      );
    })();
    const schema: object | undefined = (() => {
      const p: Metadata | undefined = find("schema")?.value;
      if (p === undefined) return undefined;
      else if (p.size() === 0 && p.isRequired() === false) return undefined;
      else if (
        p.size() === 1 &&
        p.nullable === false &&
        p.isRequired() === true &&
        p.any === false
      )
        return MetadataTypeTagSchemaFactory.object({
          report: (message) =>
            props.report({
              property: "schema",
              message,
            }),
          object: p.objects[0]!.type,
        });
      props.report({
        property: "schema",
        message: "must be an object type",
      });
      return undefined;
    })();
    return {
      name: props.object.name,
      target,
      kind,
      value,
      validate,
      exclusive: exclusive ?? false,
      schema,
    };
  };

  const get_exclusive = (props: {
    report: (next: { property: string | null; message: string }) => false;
    key: string;
    value: Metadata | undefined;
  }): boolean | string[] | null => {
    if (props.value === undefined) return false;
    else if (
      props.value.size() === 1 &&
      props.value.constants.length === 1 &&
      props.value.constants[0]!.type === "boolean" &&
      props.value.constants[0]!.values.length === 1
    )
      return props.value.constants[0]!.values[0]!.value as boolean;
    else if (
      props.value.size() === 1 &&
      props.value.tuples.length === 1 &&
      props.value.tuples[0]!.type.elements.every(
        (elem) =>
          elem.size() === 1 &&
          elem.constants.length === 1 &&
          elem.constants[0]!.type === "string" &&
          elem.constants[0]!.values.length === 1,
      )
    )
      return props.value.tuples[0]!.type.elements.map(
        (elem) => elem.constants[0]!.values[0]!.value as string,
      );
    props.report({
      property: props.key,
      message:
        "must a boolean literal type or a tuple of string literal types.",
    });
    return null;
  };
}

interface ITypeTag {
  name: string;
  target: Array<"bigint" | "number" | "string" | "array" | "object">;
  kind: string;
  value?: undefined | boolean | bigint | number | string;
  validate: Record<string, string>;
  exclusive: boolean | string[];
  schema?: undefined | any;
}

const ESSENTIAL_FIELDS = ["target", "kind", "value"];
const FIELDS = [...ESSENTIAL_FIELDS, "validate", "exclusive"];
