# 14. Appendix — Glossary

| 용어 | 정의 |
|---|---|
| **tsgo** | Microsoft/typescript-go. TypeScript 7의 Go 포팅 공식 프로젝트 |
| **TypeScript 7 / Corsa** | tsgo 기반 TS 7의 사용자 브랜드 |
| **Strada** | TypeScript 6 이하 JS 기반 코드베이스의 내부 코드네임 |
| **tsc** | 현재 TS 6.x의 CLI 바이너리 |
| **ts-patch** | 현재 typia가 의존하는 TS transformer patcher |
| **ts-patch (samchon fork)** | TS 6.x LTS 용, samchon이 유지 |
| **ttypescript** | ts-patch의 선조 (2024 deprecated) |
| **ttsc** | 이 plan이 제안하는 tsgo transformer wrapper (모델 D: shim + 최소 patch) |
| **typia-go** | 이 plan이 제안하는 typia Go 완전 재구현 (모델 E) |
| **typia v12** | 현재 릴리스, TS 6.x + ts-patch 기반 |
| **typia v13** | ttsc 채택 릴리스 (2027 Q2 예정) |
| **typia v14** | typia-go 채택 릴리스 (2029 Q2 예정) |
| **tsgonest** | 직접 경쟁자. typia+nestia의 Go 구현, NestJS 전용 |
| **typical** | Elliot Shepherd의 typia Go 프로토타입 |
| **tsgolint** | OXC의 type-aware linter. **go:linkname shim 모델**의 모범 |
| **effect-tsgo** | Effect-TS/tsgo. **patch + Go hook 모델**의 모범 |
| **unplugin-typia** | Vite/Webpack/... 용 번들러 통합 |
| **모델 A** | JS 모듈 변조 (tsgo 불가) |
| **모델 B** | Go patch + hook (Effect 방식) |
| **모델 C** | go:linkname shim (tsgolint 방식) |
| **모델 D** | Hybrid shim + 최소 patch (ttsc 제안) |
| **모델 E** | 완전 Go 재구현 (tsgonest / typia-go) |
| **옵션 A/B/C/D** | (구식 프레임) v1 옵션 비교. v2에서 **ttsc+typia-go 통합** 단일 경로로 대체. 07-strategy 역사 문서에만 잔존 |
| **Phase 0~4** | ttsc 개발 단계 |
| **M0~M33** | typia-go 월 단위 단계 |
| **MetadataSchema** | typia의 자체 IR (Intermediate Representation) |
| **MetadataFactory** | TypeScript type → MetadataSchema 변환 엔진 |
| **Programmer** | MetadataSchema → JS 코드 생성 엔진 (namespace별 13개) |
| **`go:linkname`** | Go compiler directive. 다른 패키지의 unexported symbol을 local alias로 노출 |
| **shim** | `go:linkname`으로 typescript-go internal API를 외부에 노출하는 wrapper 패키지 |
| **handshake linkname** | Go 1.23+ 제약. 양쪽(원본과 사용자)이 모두 opt-in해야 성공 |
| **libsyncrpc** | Microsoft의 Node sync stdio IPC 라이브러리 (tsgo IPC API에서 사용) |
| **MessagePack** | 바이너리 serialization 포맷. tsgo PR #711의 프로토콜 |
| **PR #711** | tsgo IPC API 스캐폴딩 PR (andrewbranch) |
| **Issue #516** | tsgo transformer API 요청 (Post-7.0 milestone, dormant) |
| **Discussion #455** | tsgo API 설계 논의 (Daniel Rosenwasser 등) |
| **Standard Schema** | Zod/Valibot/ArkType 등의 공통 인터페이스 (`~standard` 심볼) |
| **MCP** | Model Context Protocol (Anthropic) |
| **AutoBE** | samchon의 typia 기반 LLM 백엔드 생성기 |
| **Agentica** | samchon의 typia 기반 agentic LLM 프레임워크 |
| **nestia** | samchon의 typia+NestJS 통합 프레임워크 |
| **Edge runtime** | Cloudflare Workers, Vercel Edge, Deno Deploy 등 V8 isolate 환경 |
| **P1~P8** | wiki가 귀납한 typia 코드 패턴 (공식 원칙 아님) |

→ 다음 [15. 경영 요약](15-executive-summary.md)
