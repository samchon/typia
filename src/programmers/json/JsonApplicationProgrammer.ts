import { MetadataFactory } from "../../factories/MetadataFactory";

import { __IJsonApplication } from "../../schemas/json/__IJsonApplication";
import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { JsonSchemasProgrammer } from "./JsonSchemasProgrammer";

export namespace JsonApplicationProgrammer {
  export const validate = (
    metadata: Metadata,
    explore: MetadataFactory.IExplore,
  ): string[] => {
    if (explore.top === false) return JsonSchemasProgrammer.validate(metadata);

    const output: string[] = [];
    const valid: boolean =
      metadata.size() === 1 &&
      metadata.objects.length === 1 &&
      metadata.isRequired() === true &&
      metadata.nullable === false;
    if (valid === false)
      output.push(
        "JSON application's generic argument must be a class/interface type.",
      );

    const object: MetadataObjectType | undefined = metadata.objects[0]?.type;
    if (object !== undefined) {
      if (object.properties.some((p) => p.key.isSoleLiteral() === false))
        output.push("JSON application does not allow dynamic keys.");
      let least: boolean = false;
      for (const p of object.properties) {
        const value: Metadata = p.value;
        if (value.functions.length) {
          least ||= true;
          if (valid === false) {
            if (value.functions.length !== 1 || value.size() !== 1)
              output.push(
                "JSON application's function type does not allow union type.",
              );
            if (value.isRequired() === false)
              output.push("JSON application's function type must be required.");
            if (value.nullable === true)
              output.push(
                "JSON application's function type must not be nullable.",
              );
          }
        }
      }
      if (least === false)
        output.push(
          "JSON application's target type must have at least a function type.",
        );
    }
    return output;
  };

  export const write = <Version extends "3.0" | "3.1">(props: {
    version: Version;
    metadata: Metadata;
    filter?: (prop: MetadataProperty) => boolean;
  }): __IJsonApplication<Version> => {
    const object: MetadataObjectType = props.metadata.objects[0]!.type;
    const definitions: Metadata[] = [];
    const setters: Array<(schema: __IJsonApplication.Schema<Version>) => void> =
      [];
    const collect = (
      metadata: Metadata,
      setter: (schema: __IJsonApplication.Schema<Version>) => void,
    ): void => {
      definitions.push(metadata);
      setters.push(setter);
    };

    const functions: __IJsonApplication.IFunction<
      __IJsonApplication.Schema<Version>
    >[] = object.properties
      .filter(
        (p) =>
          p.key.isSoleLiteral() &&
          p.value.size() === 1 &&
          p.value.nullable === false &&
          p.value.isRequired() === true &&
          Metadata.unalias(p.value).functions.length === 1,
      )
      .filter(
        (p) =>
          p.jsDocTags.find(
            (tag) => tag.name === "hidden" || tag.name === "internal",
          ) === undefined &&
          (props.filter === undefined || props.filter(p) === true),
      )
      .map((r) =>
        collectFunction({
          version: props.version,
          name: r.key.getSoleLiteral()!,
          function: Metadata.unalias(r.value).functions[0]!,
          description: r.description,
          jsDocTags: r.jsDocTags,
          collect,
        }),
      );
    const { components, schemas } = JsonSchemasProgrammer.write({
      version: props.version,
      metadatas: definitions,
    });
    schemas.forEach((s, i) =>
      setters[i]?.(s as __IJsonApplication.Schema<Version>),
    );
    return {
      version: props.version,
      components: components as any,
      functions,
    };
  };

  export const writeDescription = <Kind extends "summary" | "title">(props: {
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    kind: Kind;
  }): Kind extends "summary"
    ? { summary?: string; description?: string }
    : { title?: string; description?: string } => {
    const title: string | undefined = (() => {
      const [explicit] = getJsDocTexts({
        jsDocTags: props.jsDocTags,
        name: props.kind,
      });
      if (explicit?.length) return explicit;
      else if (!props.description?.length) return undefined;

      const index: number = props.description.indexOf("\n");
      const top: string = (
        index === -1 ? props.description : props.description.substring(0, index)
      ).trim();
      return top.endsWith(".") ? top.substring(0, top.length - 1) : undefined;
    })();
    return {
      [props.kind]: title,
      description: props.description?.length ? props.description : undefined,
    } as any;
  };

  const collectFunction = <Version extends "3.0" | "3.1">(props: {
    version: Version;
    name: string;
    function: MetadataFunction;
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    collect: (
      metadata: Metadata,
      setter: (schema: __IJsonApplication.Schema<Version>) => void,
    ) => void;
  }): __IJsonApplication.IFunction<__IJsonApplication.Schema<Version>> => {
    const deprecated: boolean = props.jsDocTags.some(
      (tag) => tag.name === "deprecated",
    );
    const tags: string[] = props.jsDocTags
      .map((tag) =>
        tag.name === "tag"
          ? (tag.text?.filter((elem) => elem.kind === "text") ?? [])
          : [],
      )
      .flat()
      .map((elem) => elem.text)
      .map((str) => str.trim().split(" ")[0] ?? "")
      .filter((str) => !!str.length);
    return {
      name: props.name,
      async: props.function.async,
      parameters: props.function.parameters.map((param) => {
        const appParam: __IJsonApplication.IParameter<
          __IJsonApplication.Schema<Version>
        > = {
          name: param.name,
          ...writeDescription({
            description:
              param.description ??
              param.jsDocTags.find((tag) => tag.name === "description")
                ?.text?.[0]?.text ??
              props.jsDocTags
                .find(
                  (tag) =>
                    tag.name === "param" && tag.text?.[0]?.text === param.name,
                )
                ?.text?.map((e) => e.text)
                .join("")
                .substring(param.name.length) ??
              null,
            jsDocTags: props.jsDocTags,
            kind: "title",
          }),
          required: param.type.isRequired(),
          schema: null!,
        };
        props.collect(param.type, (schema) => (appParam.schema = schema));
        return appParam;
      }),
      output: props.function.output.size()
        ? (() => {
            const appOutput: __IJsonApplication.IOutput<
              __IJsonApplication.Schema<Version>
            > = {
              schema: null!,
              required: props.function.output.isRequired(),
              description:
                writeDescriptionFromJsDocTag({
                  jsDocTags: props.jsDocTags,
                  name: "return",
                }) ??
                writeDescriptionFromJsDocTag({
                  jsDocTags: props.jsDocTags,
                  name: "returns",
                }) ??
                undefined,
            };
            props.collect(
              props.function.output,
              (schema) => (appOutput.schema = schema),
            );
            return appOutput;
          })()
        : undefined,
      description: props.description ?? undefined,
      deprecated: deprecated || undefined,
      tags: tags.length ? tags : undefined,
    };
  };
}

const writeDescriptionFromJsDocTag = (props: {
  jsDocTags: IJsDocTagInfo[];
  name: string;
  parameter?: string;
}): string | null => {
  const parametric: (elem: IJsDocTagInfo) => boolean = props.parameter
    ? (tag) =>
        tag.text!.find(
          (elem) =>
            elem.kind === "parameterName" && elem.text === props.parameter,
        ) !== undefined
    : () => true;
  const tag: IJsDocTagInfo | undefined = props.jsDocTags.find(
    (tag) => tag.name === props.name && tag.text && parametric(tag),
  );
  return tag && tag.text
    ? (tag.text.find((elem) => elem.kind === "text")?.text ?? null)
    : null;
};

const getJsDocTexts = (props: {
  jsDocTags: IJsDocTagInfo[];
  name: string;
}): string[] =>
  props.jsDocTags
    .filter(
      (tag) =>
        tag.name === props.name &&
        tag.text &&
        tag.text.find((elem) => elem.kind === "text" && elem.text.length) !==
          undefined,
    )
    .map((tag) => tag.text!.find((elem) => elem.kind === "text")!.text);
