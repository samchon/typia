declare module "rollup-plugin-hypothetical" {
  export default function (props: {
    files: Record<string, string>;
    cwd?: string | boolean;
  }): any;
}
