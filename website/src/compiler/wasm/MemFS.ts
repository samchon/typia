// MemFS implements just enough of the wasm_exec.js fs interface for the
// in-browser ttsc-typia wasm to run.
//
// Why this exists: wasm_exec.js routes Go's syscalls (open / stat / read /
// write / readdir / mkdir / ...) to `globalThis.fs`. In Node, that maps to the
// real fs module. In browsers we have to supply our own. The set we implement
// here is the smallest subset typescript-go actually exercises for a typia
// transform of a tiny in-memory project.
//
// All callbacks follow the Node "errback" convention: callback(err, result).
// Errors carry a `code` (e.g. ENOENT, EBADF) so Go's os package sees them as
// proper os.PathError values.
//
// Files are stored as Uint8Array. Text files written via writeFile are
// encoded by the caller; reads return the raw bytes.

/** Mode bits exposed by stat. We only differentiate file vs directory. */
const S_IFDIR = 0o040000;
const S_IFREG = 0o100000;
const DEFAULT_FILE_MODE = S_IFREG | 0o644;
const DEFAULT_DIR_MODE = S_IFDIR | 0o755;

export interface IWasmExecFS {
  constants: Record<string, number>;
  writeSync(fd: number, buf: Uint8Array): number;
  write(
    fd: number,
    buf: Uint8Array,
    offset: number,
    length: number,
    position: number | null,
    callback: (err: NodeJS.ErrnoException | null, n: number) => void,
  ): void;
  open(
    path: string,
    flags: number,
    mode: number,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void,
  ): void;
  close(fd: number, callback: (err: NodeJS.ErrnoException | null) => void): void;
  read(
    fd: number,
    buffer: Uint8Array,
    offset: number,
    length: number,
    position: number | null,
    callback: (err: NodeJS.ErrnoException | null, n: number) => void,
  ): void;
  readdir(
    path: string,
    callback: (err: NodeJS.ErrnoException | null, entries: string[]) => void,
  ): void;
  mkdir(
    path: string,
    perm: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  stat(
    path: string,
    callback: (err: NodeJS.ErrnoException | null, stats: IFileStats) => void,
  ): void;
  lstat(
    path: string,
    callback: (err: NodeJS.ErrnoException | null, stats: IFileStats) => void,
  ): void;
  fstat(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null, stats: IFileStats) => void,
  ): void;
  fsync(fd: number, callback: (err: NodeJS.ErrnoException | null) => void): void;
  unlink(
    path: string,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  rename(
    from: string,
    to: string,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  rmdir(
    path: string,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  chmod(
    path: string,
    mode: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  fchmod(
    fd: number,
    mode: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  chown(
    path: string,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  fchown(
    fd: number,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  lchown(
    path: string,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  utimes(
    path: string,
    atime: number,
    mtime: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  link(
    path: string,
    link: string,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  symlink(
    path: string,
    link: string,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  readlink(
    path: string,
    callback: (err: NodeJS.ErrnoException | null, link: string) => void,
  ): void;
  truncate(
    path: string,
    length: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
  ftruncate(
    fd: number,
    length: number,
    callback: (err: NodeJS.ErrnoException | null) => void,
  ): void;
}

export interface IFileStats {
  isDirectory(): boolean;
  isFile(): boolean;
  size: number;
  mode: number;
  mtimeMs: number;
  atimeMs: number;
  ctimeMs: number;
  dev: number;
  ino: number;
  nlink: number;
  uid: number;
  gid: number;
  rdev: number;
  blksize: number;
  blocks: number;
}

interface INode {
  kind: "file" | "dir";
  data: Uint8Array;
  mtimeMs: number;
}

export class MemFSError extends Error {
  public code: string;
  public errno: number;
  public path?: string;
  public syscall?: string;
  constructor(code: string, syscall: string, path?: string) {
    super(`${code}: ${syscall} ${path ?? ""}`.trim());
    this.code = code;
    this.errno = errnoForCode(code);
    this.path = path;
    this.syscall = syscall;
  }
}

function errnoForCode(code: string): number {
  switch (code) {
    case "ENOENT":
      return -2;
    case "EBADF":
      return -9;
    case "EEXIST":
      return -17;
    case "ENOTDIR":
      return -20;
    case "EISDIR":
      return -21;
    default:
      return -1;
  }
}

export interface IMemFSHost {
  fs: IWasmExecFS;
  writeFile(path: string, data: string | Uint8Array): void;
  readFile(path: string): Uint8Array | null;
  exists(path: string): boolean;
  mkdirp(path: string): void;
  stdout: { buffer: string };
  stderr: { buffer: string };
  resetStdio(): void;
}

const encoder = new TextEncoder();

function normalize(p: string): string {
  if (!p) return "/";
  const parts = p.replace(/\\/g, "/").split("/").filter(Boolean);
  const stack: string[] = [];
  for (const part of parts) {
    if (part === ".") continue;
    if (part === "..") {
      stack.pop();
      continue;
    }
    stack.push(part);
  }
  return "/" + stack.join("/");
}

export function createMemFS(): IMemFSHost {
  const nodes = new Map<string, INode>();
  nodes.set("/", { kind: "dir", data: new Uint8Array(), mtimeMs: Date.now() });

  const stdout = { buffer: "" };
  const stderr = { buffer: "" };

  const fdTable = new Map<
    number,
    { path: string; position: number; isStdout?: boolean; isStderr?: boolean }
  >();
  let nextFd = 100;
  // Reserve 1/2 for stdout/stderr writeSync routing.
  fdTable.set(1, { path: "/dev/stdout", position: 0, isStdout: true });
  fdTable.set(2, { path: "/dev/stderr", position: 0, isStderr: true });

  function ensureParentDirs(p: string): void {
    const segments = normalize(p).split("/").filter(Boolean);
    segments.pop();
    let cursor = "";
    for (const seg of segments) {
      cursor += "/" + seg;
      if (!nodes.has(cursor)) {
        nodes.set(cursor, {
          kind: "dir",
          data: new Uint8Array(),
          mtimeMs: Date.now(),
        });
      }
    }
  }

  function mkdirp(p: string): void {
    const segments = normalize(p).split("/").filter(Boolean);
    let cursor = "";
    for (const seg of segments) {
      cursor += "/" + seg;
      const existing = nodes.get(cursor);
      if (!existing) {
        nodes.set(cursor, {
          kind: "dir",
          data: new Uint8Array(),
          mtimeMs: Date.now(),
        });
      } else if (existing.kind !== "dir") {
        throw new MemFSError("ENOTDIR", "mkdir", cursor);
      }
    }
  }

  function writeFile(p: string, data: string | Uint8Array): void {
    const norm = normalize(p);
    ensureParentDirs(norm);
    const bytes = typeof data === "string" ? encoder.encode(data) : data;
    nodes.set(norm, { kind: "file", data: bytes, mtimeMs: Date.now() });
  }

  function readFile(p: string): Uint8Array | null {
    const node = nodes.get(normalize(p));
    if (!node || node.kind !== "file") return null;
    return node.data;
  }

  function exists(p: string): boolean {
    return nodes.has(normalize(p));
  }

  function statSync(p: string): IFileStats {
    const norm = normalize(p);
    const node = nodes.get(norm);
    if (!node) throw new MemFSError("ENOENT", "stat", norm);
    return makeStats(node);
  }

  function makeStats(node: INode): IFileStats {
    const isDir = node.kind === "dir";
    return {
      isDirectory: () => isDir,
      isFile: () => !isDir,
      size: node.data.byteLength,
      mode: isDir ? DEFAULT_DIR_MODE : DEFAULT_FILE_MODE,
      mtimeMs: node.mtimeMs,
      atimeMs: node.mtimeMs,
      ctimeMs: node.mtimeMs,
      dev: 0,
      ino: 0,
      nlink: 1,
      uid: 0,
      gid: 0,
      rdev: 0,
      blksize: 4096,
      blocks: Math.ceil(node.data.byteLength / 512),
    };
  }

  function readdirSync(p: string): string[] {
    const norm = normalize(p);
    const node = nodes.get(norm);
    if (!node) throw new MemFSError("ENOENT", "readdir", norm);
    if (node.kind !== "dir") throw new MemFSError("ENOTDIR", "readdir", norm);
    const prefix = norm === "/" ? "/" : norm + "/";
    const direct = new Set<string>();
    for (const key of nodes.keys()) {
      if (!key.startsWith(prefix) || key === norm) continue;
      const rest = key.slice(prefix.length);
      const cut = rest.indexOf("/");
      direct.add(cut === -1 ? rest : rest.slice(0, cut));
    }
    return [...direct].sort();
  }

  const fs: IWasmExecFS = {
    constants: {
      O_WRONLY: 1,
      O_RDWR: 2,
      O_CREAT: 64,
      O_TRUNC: 512,
      O_APPEND: 1024,
      O_EXCL: 128,
      O_DIRECTORY: 65536,
    },

    writeSync(fd, buf) {
      const text = new TextDecoder().decode(buf);
      if (fd === 1) {
        stdout.buffer += text;
      } else if (fd === 2) {
        stderr.buffer += text;
      } else {
        // Unknown fd writeSync: route to console for diagnostics.
        stderr.buffer += text;
      }
      return buf.length;
    },

    write(fd, buf, offset, length, position, callback) {
      try {
        if (position !== null && position !== 0) {
          callback(new MemFSError("ESPIPE", "write"), 0);
          return;
        }
        const view = buf.subarray(offset, offset + length);
        const written = this.writeSync(fd, view);
        callback(null, written);
      } catch (err) {
        callback(err as NodeJS.ErrnoException, 0);
      }
    },

    open(p, flags, _mode, callback) {
      const norm = normalize(p);
      const node = nodes.get(norm);
      const creating = (flags & this.constants.O_CREAT) !== 0;
      if (!node) {
        if (!creating) {
          callback(new MemFSError("ENOENT", "open", norm), -1);
          return;
        }
        ensureParentDirs(norm);
        nodes.set(norm, {
          kind: "file",
          data: new Uint8Array(),
          mtimeMs: Date.now(),
        });
      }
      const fd = nextFd++;
      fdTable.set(fd, { path: norm, position: 0 });
      if ((flags & this.constants.O_TRUNC) !== 0) {
        nodes.set(norm, {
          kind: "file",
          data: new Uint8Array(),
          mtimeMs: Date.now(),
        });
      }
      callback(null, fd);
    },

    close(fd, callback) {
      if (!fdTable.has(fd)) {
        callback(new MemFSError("EBADF", "close"));
        return;
      }
      if (fd > 2) fdTable.delete(fd);
      callback(null);
    },

    read(fd, buffer, offset, length, position, callback) {
      const entry = fdTable.get(fd);
      if (!entry) {
        callback(new MemFSError("EBADF", "read"), 0);
        return;
      }
      const node = nodes.get(entry.path);
      if (!node || node.kind !== "file") {
        callback(new MemFSError("ENOENT", "read", entry.path), 0);
        return;
      }
      const start = position ?? entry.position;
      const end = Math.min(start + length, node.data.byteLength);
      const slice = node.data.subarray(start, end);
      buffer.set(slice, offset);
      if (position === null) entry.position = end;
      callback(null, slice.byteLength);
    },

    readdir(p, callback) {
      try {
        callback(null, readdirSync(p));
      } catch (err) {
        callback(err as NodeJS.ErrnoException, []);
      }
    },

    mkdir(p, _perm, callback) {
      try {
        mkdirp(p);
        callback(null);
      } catch (err) {
        callback(err as NodeJS.ErrnoException);
      }
    },

    stat(p, callback) {
      try {
        callback(null, statSync(p));
      } catch (err) {
        callback(err as NodeJS.ErrnoException, undefined as unknown as IFileStats);
      }
    },

    lstat(p, callback) {
      this.stat(p, callback);
    },

    fstat(fd, callback) {
      const entry = fdTable.get(fd);
      if (!entry) {
        callback(
          new MemFSError("EBADF", "fstat"),
          undefined as unknown as IFileStats,
        );
        return;
      }
      try {
        callback(null, statSync(entry.path));
      } catch (err) {
        callback(
          err as NodeJS.ErrnoException,
          undefined as unknown as IFileStats,
        );
      }
    },

    fsync(_fd, callback) {
      callback(null);
    },

    unlink(p, callback) {
      const norm = normalize(p);
      if (!nodes.has(norm)) {
        callback(new MemFSError("ENOENT", "unlink", norm));
        return;
      }
      nodes.delete(norm);
      callback(null);
    },

    rename(from, to, callback) {
      const src = normalize(from);
      const node = nodes.get(src);
      if (!node) {
        callback(new MemFSError("ENOENT", "rename", src));
        return;
      }
      const dest = normalize(to);
      nodes.delete(src);
      nodes.set(dest, node);
      callback(null);
    },

    rmdir(p, callback) {
      this.unlink(p, callback);
    },

    chmod(_p, _mode, callback) {
      callback(null);
    },
    fchmod(_fd, _mode, callback) {
      callback(null);
    },
    chown(_p, _uid, _gid, callback) {
      callback(null);
    },
    fchown(_fd, _uid, _gid, callback) {
      callback(null);
    },
    lchown(_p, _uid, _gid, callback) {
      callback(null);
    },
    utimes(_p, _atime, _mtime, callback) {
      callback(null);
    },
    link(_p, _link, callback) {
      callback(new MemFSError("EPERM", "link"));
    },
    symlink(_p, _link, callback) {
      callback(new MemFSError("EPERM", "symlink"));
    },
    readlink(_p, callback) {
      callback(new MemFSError("EINVAL", "readlink"), "");
    },
    truncate(_p, _length, callback) {
      callback(null);
    },
    ftruncate(_fd, _length, callback) {
      callback(null);
    },
  };

  return {
    fs,
    writeFile,
    readFile,
    exists,
    mkdirp,
    stdout,
    stderr,
    resetStdio() {
      stdout.buffer = "";
      stderr.buffer = "";
    },
  };
}
