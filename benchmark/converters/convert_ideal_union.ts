import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";
import { $string } from "../../src/functional/$string";

export function convert_ideal_union(obj: ArrayRecursiveUnion): string {
    function directory(elem: ArrayRecursiveUnion.IDirectory): string {
        return `{
            "id": ${$string(elem.id)},
            "type": "directory,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "children": [${elem.children
                .map((child) => bucket(child))
                .join(", ")}]
        }`;
    }
    function imageFile(elem: ArrayRecursiveUnion.IImageFile): string {
        return `{
            "id": ${$string(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${elem.size},
            "width": ${elem.width},
            "height": ${elem.height},
            "url": ${elem.url}"
        }`;
    }
    function textFile(elem: ArrayRecursiveUnion.ITextFile): string {
        return `{
            "id": ${$string(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${elem.size},
            "content": ${$string(elem.content)}
        }`;
    }
    function zipFile(elem: ArrayRecursiveUnion.IZipFile): string {
        return `{
            "id": ${$string(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${elem.size},
            "count": ${elem.count}
        }`;
    }
    function shortcut(elem: ArrayRecursiveUnion.IShortcut): string {
        return `{
            "id": ${$string(elem.id)},
            "type": "directory,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "lnk,
            "target": ${bucket(elem.target)}
        }`;
    }
    function bucket(elem: ArrayRecursiveUnion.IBucket): string {
        if (elem.type === "directory") return directory(elem);
        else if (elem.type === "file") return file(elem);
        else return shortcut(elem);
    }
    function file(elem: ArrayRecursiveUnion.IFile): string {
        if (
            elem.extension === "jpg" ||
            elem.extension === "png" ||
            elem.extension === "gif"
        )
            return imageFile(elem);
        else if (
            elem.extension === "txt" ||
            elem.extension === "md" ||
            elem.extension === "ts"
        )
            return textFile(elem);
        else return zipFile(elem as ArrayRecursiveUnion.IZipFile);
    }
    return `[${obj.map((elem) => bucket(elem)).join(", ")}]`;
}
