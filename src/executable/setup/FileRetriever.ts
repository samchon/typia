import fs from "fs";
import path from "path";

export namespace FileRetriever {
  export const directory = (props: {
    file: string;
    location: string;
    depth?: number;
  }): string | null => {
    const location: string = path.join(props.location, props.file);
    if (fs.existsSync(location)) return props.location;
    else if ((props.depth ?? 0) > 2) return null;
    return directory({
      file: props.file,
      location: path.join(props.location, ".."),
      depth: (props.depth ?? 0) + 1,
    });
  };
}
