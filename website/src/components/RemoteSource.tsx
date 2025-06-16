import { MDXRemote } from "next-mdx-remote";
import { compileMdx } from "nextra/compile";
import { useEffect, useState } from "react";
import { VariadicSingleton } from "tstl";

export const RemoteSource = (props: {
  url: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlight?: string;
}) => {
  const [component, setComponent] = useState<React.ReactElement | null>(null);
  useEffect(() => {
    const func = async () => {
      const content: string = [
        [
          `${BRACKET}typescript`,
          !!props.filename?.length
            ? ` filename=${JSON.stringify(props.filename)}`
            : "",
          props.showLineNumbers ? " showLineNumbers" : "",
          !!props.highlight?.length ? ` {${props.highlight}}` : "",
        ].join(""),
        await loader.get(props.url),
        BRACKET,
      ].join("\n");
      const result = await compileMdx(content);
      setComponent(
        <MDXRemote
          compiledSource={result.result}
          frontmatter={result.frontMatter}
          scope={result.structurizedData}
        />,
      );
    };
    func().catch(console.error);
  }, [props.url, props.filename, props.showLineNumbers, props.highlight]);
  return component;
};
export default RemoteSource;

const BRACKET = "```";
const loader = new VariadicSingleton((url) => fetch(url).then((r) => r.text()));
