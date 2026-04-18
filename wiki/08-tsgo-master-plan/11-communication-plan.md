# 11. Communication Plan — 대외 소통

## 메시지 계층

### 메시지 A (2026 Q2): 공식 입장문

**채널**: typia.io 블로그, GitHub Issue #1534 공식 답변, Twitter/X, dev.to

**내용**:
```
typia는 TypeScript 7 / tsgo 대응에 착수했습니다.

1. 약속: 기존 typia v12 사용자 코드는 한 자도 바뀌지 않습니다.
2. 계획: 
   - Year 1: ttsc (tsgo wrapper) 개발
   - Year 2-3: typia-go (Go 재구현) 병행
3. 지원: TS 6.x LTS 2028 말까지 유지
4. Standard Schema 어댑터 즉시 출시 (2026 Q2)
5. Edge runtime (Cloudflare Workers, Vercel Edge) 완벽 호환

자세한 로드맵: [link to master plan]
피드백 환영.
```

**수위**: 정직. 불확실성(Go 조력자 미정 등) 솔직히 인정.

### 메시지 B (2026 Q2): Edge Runtime 차별점

**채널**: dev.to, Reddit r/typescript, X

**내용**: "Why typia is the only validator that works on Cloudflare Workers"
- Ajv가 `new Function` 사용해 Workers에서 crash하는 선례
- typia emit은 static code → 동작
- 데모 repo 링크

**영향**: 새 사용자 유입, 차별점 부각 ([Audit 7](../09-audit/07-cycle7-missing-perspectives.md) 7번)

### 메시지 C (2026 Q2): AI-native DX

**채널**: cursor.com 포럼, Anthropic/OpenAI devrel 컨택

**내용**: `llms.txt`, Cursor rules, MCP server 템플릿 배포
- "Type-first works best with AI code generation"
- AutoBE / Agentica 사례

### 메시지 D (2026 Q4): ttsc beta 공개

**채널**: GitHub Releases, 블로그, 커뮤니티 알파 테스트 모집

**내용**:
- Phase 1 완료
- early adopter 초대
- IPC 비용 실측 결과 (숨기지 않음)

### 메시지 E (2027 Q2): ttsc v1.0 + typia v13

**채널**: 대규모 — 블로그 시리즈 (3~5편), 컨퍼런스 발표 신청

**컨퍼런스 후보**:
- TSConf 2027
- Korea JS Conference
- JSConf EU

**내용**:
- "typia v13: Surviving tsgo"
- 성능 벤치마크 (투명하게: 강점·약점 모두)
- 마이그레이션 가이드

### 메시지 F (2028~2029): typia-go 과정 공유

**채널**: 매 분기 progress update

**내용**:
- MVP milestone
- LOC / 기능 진도
- 투명한 지연 보고

### 메시지 G (2029 Q2): typia v14

**채널**: 최대 규모

**내용**:
- "Go-native typia, 10× faster, zero setup"
- tsgonest와의 정직한 비교 (LLM/Protobuf/범용 등 차별점)
- 5년 회고

## Microsoft 관계

### 우호 전략
- typescript-go Discussion #455, Issue #516 등에 **정중한 피드백** (전환 비용, 커뮤니티 사례)
- ts-morph 저자(dsherret), Effect-TS와 **공동 청원 그룹** 구성
- Daniel Rosenwasser, andrewbranch, jakebailey에게 **typia 사용 사례 공유**

### 피할 것
- 공식 transformer API 없다고 압박성 메시지
- 적대적 표현 ("Microsoft won't support...")

## 경쟁자 관계

### tsgonest
- **정중한 인용**. tsgonest가 typia를 credit함에 대응해 상호 존중
- 기술적 차이(LLM/Protobuf/범용)를 **정확히** 설명, 우위 주장은 근거 있을 때만
- Migration 방향은 **양방향** 허용 (tsgonest → typia 역방향 가이드)

### typical
- "동료 탐험자" 포지션
- 기술 교류 제안 (예: Go:TS LOC 비율 벤치, IPC 설계)

### Zod / Valibot / ArkType
- Standard Schema 협력 (이미 ~standard 인터페이스)
- BAML, Pydantic 같은 다른 언어 사례 연구

## 커뮤니티 활성화

### 즉시 (2026 Q2~)
- Discord 서버 활성 확대 (타운홀 월 1회)
- GitHub Discussions 카테고리 정리 (technical, community, tsgo)
- dev.to 저자 2~3명 초청 (typia 사용 사례 공유)

### 중기 (2026 Q4~)
- Call for Contributors (문서, 테스트, 어댑터)
- OpenCollective 목표 공개, 스폰서 모집

### 장기 (2027~)
- typia Conf (가상) 연 1회 — nestia + AutoBE + Agentica 공동

## Kill Criteria (커뮤니케이션)

- 공식 입장문 이후 48시간 내 5건 이상 공개 비판 → 추가 Q&A 공개
- ttsc beta 공개 후 심각 버그 제보 3건 이상 → 즉시 hotfix
- Microsoft typescript-go 팀과의 대화 3개월 단절 → 다른 경로 탐색

→ 다음 [12. 거버넌스](12-governance.md)
