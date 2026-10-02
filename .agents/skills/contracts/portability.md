# Native Platform Boundaries

Apply to native filesystem access, path or file identity, process boundaries and types defining those boundaries. Pure calculations, ordinary options and browser virtual filesystems do not acquire this obligation from their package.

## OS-neutral implementation

Write OS-neutral code. Use supported abstractions that preserve the product contract across supported operating systems, and isolate necessary native differences behind an explicit platform boundary. An OS name is not evidence of a filesystem's case policy or capabilities.

Explain how the declaration obtains actual platform capabilities and represents necessary native differences. For paths, distinguish filesystem identity and case policy from URL or protocol spelling. For processes, explain the executable and argument representation when it differs across platforms. A boundary type explains the native distinctions its members carry.

Native representations and capabilities vary while callers rely on one supported contract. Identify any remaining platform assumption or unsupported native case. Address the filesystem or process boundary the declaration actually serves, rather than repeating general algorithm, structure or resource-lifetime arguments.
