import { detect } from "package-manager-detector";
import { AGENTS } from "package-manager-detector/constants";
import { resolveCommand } from 'package-manager-detector/commands'

type Agent = typeof AGENTS[number];

export { detect, AGENTS, resolveCommand };
export type { Agent };
