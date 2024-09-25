import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { IJsDocTagInfo } from "../../module";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmApplicationProgrammer {
  export const validate = (
    meta: Metadata,
    explore: MetadataFactory.IExplore,
  ): string[] => {
    if (explore.top === false) return LlmSchemaProgrammer.validate(meta);

    const output: string[] = [];
    const valid: boolean =
      meta.size() === 1 &&
      meta.objects.length === 1 &&
      meta.isRequired() === true &&
      meta.nullable === false;
    if (valid === false)
      output.push(
        "LLM application's generic arugment must be a class/interface type.",
      );

    const object: MetadataObject | undefined = meta.objects[0];
    if (object !== undefined) {
      if (object.properties.some((p) => p.key.isSoleLiteral() === false))
        output.push("LLM application does not allow dynamic keys.");
      let least: boolean = false;
      for (const p of object.properties) {
        const value: Metadata = p.value;
        if (value.functions.length) {
          least ||= true;
          if (valid === false) {
            if (value.functions.length !== 1 || value.size() !== 1)
              output.push(
                "LLM application's function type does not allow union type.",
              );
            if (value.isRequired() === false)
              output.push("LLM application's function type must be required.");
            if (value.nullable === true)
              output.push(
                "LLM application's function type must not be nullable.",
              );
          }
        }
      }
      if (least === false)
        output.push(
          "LLM application's target type must have at least a function type.",
        );
    }
    return output;
  };

  export const write = (metadata: Metadata): ILlmApplication => {
    const errors: string[] = validate(metadata, {
      top: true,
      object: null,
      property: null,
      parameter: null,
      nested: null,
      aliased: false,
      escaped: false,
      output: false,
    });
    if (errors.length)
      throw new Error("Failed to write LLM application: " + errors.join("\n"));

    const object: MetadataObject = metadata.objects[0]!;
    return {
      functions: object.properties
        .filter(
          (p) =>
            p.value.functions.length === 1 &&
            p.value.size() === 1 &&
            p.key.isSoleLiteral(),
        )
        .filter(
          (p) => p.jsDocTags.find((tag) => tag.name === "hidden") === undefined,
        )
        .map((p) =>
          writeFunction({
            name: p.key.getSoleLiteral()!,
            function: p.value.functions[0]!,
            description: p.description,
            jsDocTags: p.jsDocTags,
          }),
        ),
      options: {
        separate: null,
      },
    };
  };

  const writeFunction = (props: {
    name: string;
    function: MetadataFunction;
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
  }): ILlmFunction => {
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
      parameters: props.function.parameters.map((p) => {
        const jsDocTagDescription: string | null = writeDescriptionFromJsDocTag(
          {
            jsDocTags: p.jsDocTags,
            tag: "param",
            parameter: p.name,
          },
        );
        return writeSchema({
          metadata: p.type,
          description: jsDocTagDescription ?? p.description,
          jsDocTags: jsDocTagDescription ? [] : p.jsDocTags,
        });
      }),
      output:
        props.function.output.size() || props.function.output.nullable
          ? writeSchema({
              metadata: props.function.output,
              description:
                writeDescriptionFromJsDocTag({
                  jsDocTags: props.jsDocTags,
                  tag: "return",
                }) ??
                writeDescriptionFromJsDocTag({
                  jsDocTags: props.jsDocTags,
                  tag: "returns",
                }),
              jsDocTags: [],
            })
          : undefined,
      description: props.description ?? undefined,
      deprecated: deprecated || undefined,
      tags: tags.length ? tags : undefined,
    };
  };

  const writeSchema = (props: {
    metadata: Metadata;
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
  }): ILlmSchema => {
    const schema: ILlmSchema = LlmSchemaProgrammer.write(props.metadata);
    const explicit: Pick<ILlmSchema, "title" | "description"> =
      writeDescription({
        description: props.description,
        jsDocTags: props.jsDocTags,
      });
    return {
      ...schema,
      ...(!!explicit.title?.length || !!explicit.description?.length
        ? explicit
        : {}),
    };
  };

  const writeDescription = (props: {
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
  }): Pick<ILlmSchema, "title" | "description"> => {
    const title: string | undefined = (() => {
      const [explicit] = getJsDocTexts({
        jsDocTags: props.jsDocTags,
        name: "title",
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
      title: title,
      description: props.description?.length ? props.description : undefined,
    } as any;
  };

  const writeDescriptionFromJsDocTag = (props: {
    jsDocTags: IJsDocTagInfo[];
    tag: string;
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
      (tag) => tag.name === props.tag && tag.text && parametric(tag),
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
}
