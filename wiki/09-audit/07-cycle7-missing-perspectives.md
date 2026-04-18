# Audit 7 — 누락된 14개 관점

## 요약

1. **Standard Schema** — spec 60줄 interface (`~standard` 심볼). 1시간 아니라 **2~3주 통합 작업** 필요.
2. **SWC plugins** — WASM ABI, **TypeChecker 접근 불가** → typia 호스트 불가.
3. **Biome** — 2026 Roadmap에 transformer 없음 → out-of-scope.
4. **Oxc / Rolldown** — type-aware 아님, **linkname shim 패턴만 차용 가능**.
5. **Bun** — Zig 네이티브 transpiler, plugin 훅에서 TypeChecker 미접근.
6. **Deno 2.x** — 동일. pre-built JS 소비자 위치.
7. **Edge runtime (Cloudflare Workers/Vercel Edge)** — **typia의 결정적 구조 승리**. Workers는 `eval`/`new Function(code)` 금지. Ajv crash함. **typia emit은 static code라 그대로 동작**. 이를 "Why typia" 첫 페이지에 올려야 함.
8. **tsgo 2026 Q1~Q2 공식 update** — Issue #516, Discussion #455 계속 pin. Corsa API 설계 중.
9. **tsgonest 현재 상태** — 공개 프로덕션 채택 사례 **증거 빈약** (블로그/X에 바이럴 없음).
10. **typia 커뮤니티 활성도** — Reddit/X 바이럴 적음. Zod·Valibot·ArkType 대비 저조.
11. **nestia→tsgonest 이주 실증** — migration 문서는 있으나 실사용 후기 **검색 불가**.
12. **Cross-language 교훈**:
    - **Pydantic-core**: 타입→IR(core schema)→emit 중간층 표준화 → 다언어 port 쉬워짐
    - **schemars**: derive 매크로 + Serde interop
    - **Jackson**: 파싱+검증 2-phase 열등 → typia의 assertParse는 구조적 우월
13. **Go linkname window**: 1.23 handshake, 1.24 `-checklinkname=1`, 1.27+ 더 엄격 예상. **typescript-go와 handshake 협약이 장기 필수**.
14. **AI 코드 생성 시대 DX**: typia는 `llms.txt` / Cursor rules / MCP server 공식 템플릿 필요. 안 하면 AI가 기본 Zod 추천.

## Wiki 반영 조치

### 신규 챕터 추가
- "Edge runtime native" — typia의 숨은 결정적 차별점
- "AI-native DX" — llms.txt, Cursor rules, MCP server
- "Cross-language lessons" — Pydantic-core IR 층 교훈

### 기존 섹션 강화
- tsgo 위협 — Issue #516, Discussion #455 계속 모니터
- Standard Schema — "1시간 작업"은 과소. **2~3주가 현실**
- linkname — Go 1.23~1.27 window 표 추가

### "해결책 아님" 명시
- SWC plugin, Biome, Bun plugin, Deno — 모두 typia 대체 host 불가. 오해 방지 명시.

## Sources (주요)
- [standard-schema spec](https://github.com/standard-schema/standard-schema)
- [SWC plugins](https://swc.rs/docs/plugin/ecmascript/getting-started)
- [Biome v2 Biotype](https://biomejs.dev/blog/biome-v2/)
- [Oxc transformer](https://oxc.rs/docs/guide/usage/transformer)
- [Cloudflare Workers eval 제한](https://developers.cloudflare.com/workers/languages/typescript/)
- [TypeScript-Go Issue #516](https://github.com/microsoft/typescript-go/issues/516)
- [tsgonest](https://github.com/tsgonest/tsgonest)
- [Pydantic architecture](https://docs.pydantic.dev/latest/internals/architecture/)
- [Go linkname #67401](https://github.com/golang/go/issues/67401)
