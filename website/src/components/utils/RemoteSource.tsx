import { compileMdx } from "nextra/compile";
import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "nextra/mdx";
import { VariadicSingleton } from "tstl";

export const RemoteSource = async (props: {
  language: string;
  url: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlight?: string;
}) => {
  const content: string = await loader.get(props.url);
  const header: string = [
    `${BRACKET}${props.language}`,
    !!props.filename?.length
      ? ` filename=${JSON.stringify(props.filename)}`
      : "",
    props.showLineNumbers ? " showLineNumbers" : "",
    !!props.highlight?.length ? ` {${props.highlight}}` : "",
  ].join("");
  const raw = await compileMdx([header, content.trim(), BRACKET].join("\n"));
  return (
    <MDXRemote
      components={useMDXComponents}
      compiledSource={raw.result}
      frontmatter={raw.frontMatter}
      scope={raw.title}
    />
  );
};
export default RemoteSource;

const BRACKET = "```";
const loader = new VariadicSingleton((url) => fetch(url).then((r) => r.text()));
