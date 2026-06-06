const TALLY_FORM_URL = "https://tally.so/r/Pdk2rB";

const samples = [
  {
    label: "SAMPLE 01",
    category: "SaaS CS / 導入支援",
    title: "BtoB SaaS カスタマーサクセス",
    candidate: "法人営業3年・SaaS未経験",
    jobNeeds: [
      "導入支援",
      "オンボーディング",
      "顧客課題の整理",
      "社内連携",
    ],
    candidateExperience: [
      "法人営業3年",
      "顧客折衝",
      "提案経験",
      "未経験商材のキャッチアップ",
    ],
    point:
      "新規営業で培った顧客折衝力を、導入後のオンボーディングや活用支援に転用できるか。",
    topics: [
      "顧客折衝経験の転用",
      "導入後の伴走経験",
      "未経験領域のキャッチアップ",
    ],
    questions: [
      "新規提案ではなく、導入後の顧客に継続的に伴走した経験はありますか？",
      "顧客要望と社内リソースが合わない時、どのように調整していましたか？",
      "初めて扱う商材や業務知識を、どのようにキャッチアップしていましたか？",
    ],
    tags: ["顧客折衝", "導入支援", "キャッチアップ"],
    reason: "法人営業経験 × SaaS導入後の顧客伴走",
    concerns: [
      "SaaS未経験でも立ち上がれる育成体制",
      "営業経験がCSでどう活きるか",
      "顧客折衝と業務改善のバランス",
    ],
  },
  {
    label: "SAMPLE 02",
    category: "BPO / オペレーション",
    title: "BPOオペレーションリーダー",
    candidate: "コールセンターSV経験あり",
    jobNeeds: [
      "業務フロー設計",
      "メンバー管理",
      "品質改善",
      "顧客折衝",
    ],
    candidateExperience: [
      "コールセンターSV経験",
      "メンバー育成",
      "応対品質の改善",
      "クレーム対応",
    ],
    point:
      "既存オペレーションの管理だけでなく、業務改善や顧客との調整まで担えるか。",
    topics: [
      "現場改善の進め方",
      "メンバー管理と品質維持",
      "顧客要望との優先順位調整",
    ],
    questions: [
      "現場でミスや遅延が続いた時、原因をどう整理して改善しましたか？",
      "メンバーの稼働状況と顧客要望がぶつかった時、どう優先順位を決めていましたか？",
      "属人的になっていた業務を、仕組み化した経験はありますか？",
    ],
    tags: ["品質改善", "優先順位", "仕組み化"],
    reason: "コールセンターSV経験 × BPO現場の運用改善",
    concerns: [
      "任される裁量",
      "現場改善にどこまで関われるか",
      "顧客折衝の頻度",
    ],
  },
  {
    label: "SAMPLE 03",
    category: "導入コンサル / 業務改善SaaS",
    title: "導入コンサルタント",
    candidate: "SIerでのPMO経験あり",
    jobNeeds: [
      "As-Is整理",
      "To-Be設計",
      "導入プロジェクト推進",
      "活用定着支援",
    ],
    candidateExperience: [
      "SIerでのPMO経験",
      "進行管理",
      "関係者調整",
      "課題整理",
    ],
    point:
      "プロジェクト推進経験を、顧客業務に踏み込む導入支援に転用できるか。",
    topics: [
      "曖昧な要望の整理",
      "複数部門との合意形成",
      "導入後の定着支援",
    ],
    questions: [
      "顧客の要望が曖昧な状態から、業務要件を整理した経験はありますか？",
      "複数部門の意見が割れた時、どのように合意形成していましたか？",
      "導入後に現場で使われないリスクをどう防いでいましたか？",
    ],
    tags: ["要件整理", "合意形成", "定着支援"],
    reason: "PMO経験 × 顧客業務に踏み込む導入支援",
    concerns: [
      "導入後の責任範囲",
      "プロダクト理解のキャッチアップ",
      "顧客業務にどこまで入り込むか",
    ],
  },
];

const aiComparison = [
  {
    normal: "優先順位はどうつけていますか？",
    asumen:
      "メンバーの稼働状況と顧客要望がぶつかった時、どう優先順位を決めていましたか？",
  },
  {
    normal: "トラブル対応経験を教えてください。",
    asumen:
      "現場でミスや遅延が続いた時、原因をどう整理して改善しましたか？",
  },
  {
    normal: "新しい知識をキャッチアップできますか？",
    asumen:
      "初めて扱う商材や業務知識を、どのようにキャッチアップしていましたか？",
  },
];

const fitJobs = [
  "SaaSのカスタマーサクセス",
  "導入支援 / オンボーディング",
  "BPO / オペレーション",
  "IT運用 / テクニカルサポート",
  "業界特化SaaS",
  "現場メンバーが面談に出る採用",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1f2f6f]">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-lg mb-4 text-[#2aa7a1] font-semibold">
          採用担当の方へ
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          「これだけ見て入ってください」を、
          <br />
          候補者ごとに。
        </h1>

        <p className="text-2xl leading-relaxed mb-6">
          採用担当が現場面談者に渡せる
          <br />
          「候補者別の面談前メモ」を作成します。
        </p>

        <p className="text-lg leading-relaxed text-[#51608f] mb-10">
          求人票と匿名化した候補者プロフィールをもとに、
          現場面談者が面談前に見るべきポイントを1枚に整理します。
          <br />
          採用担当が「この候補者とは、このあたりを話してほしい」と
          現場に共有しやすくするための面談前メモです。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#2d4aa5] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition text-center"
          >
            無料で1件作成する
          </a>

          <a
            href="#sample"
            className="inline-block bg-white text-[#2d4aa5] border border-[#2d4aa5] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#eef2ff] transition text-center"
          >
            サンプルメモを見る
          </a>
        </div>

        <p className="mt-5 text-sm text-[#667]">
          求人URLと匿名プロフィールを送るだけ。通常1〜2営業日以内を目安にお返しします。
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          採用担当として、こんなことありませんか？
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>
              ・現場面談者に候補者情報を渡しても、どこまで読まれているか分からない
            </li>
            <li>
              ・「この候補者はここを見てほしい」を毎回伝えるのが大変
            </li>
            <li>
              ・面談担当者によって、聞くことや深掘りの質にばらつきがある
            </li>
            <li>
              ・求人票と職務経歴書を見比べて、確認観点を作る時間が足りない
            </li>
          </ul>
        </div>
      </section>

      {/* Value */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-sm font-bold text-[#2aa7a1] mb-3">
            明日めんができること
          </p>

          <h2 className="text-3xl font-bold mb-6">
            採用担当が現場に渡しやすい形に、
            <br />
            候補者ごとの確認観点を整理します。
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-8">
            候補者ごとに、職務経歴のどこを見るべきか、
            どんな質問をするとよいかは変わります。
            <br />
            明日めんは、求人票と候補者プロフィールの接点をもとに、
            現場面談者が短時間で読みやすい形にまとめます。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">1</p>
              <p className="text-xl font-bold leading-relaxed">
                求人側で求められることを整理
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">2</p>
              <p className="text-xl font-bold leading-relaxed">
                候補者側にある経験を整理
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">3</p>
              <p className="text-xl font-bold leading-relaxed">
                現場で見るべきポイントに変換
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-sm font-bold text-[#2aa7a1] mb-3">
            こんな求人で使いやすいです
          </p>

          <h2 className="text-3xl font-bold mb-6">
            候補者によって、確認観点が変わりやすい求人に向いています。
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-8">
            明日めんは、経験の読み替えや現場での深掘り観点が変わりやすい求人で特に使いやすいです。
            <br />
            採用担当が現場面談者に「この候補者はここを見てほしい」と共有する場面を想定しています。
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {fitJobs.map((job) => (
              <div
                key={job}
                className="rounded-2xl bg-[#f5f5f7] p-5 text-lg font-semibold"
              >
                ・{job}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">
          使い方は、たった3ステップ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["1", "求人URLを送る"],
            ["2", "匿名プロフィールを送る"],
            ["3", "1枚メモを受け取る"],
          ].map(([num, text]) => (
            <div key={num} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-[#2aa7a1] font-bold mb-3">STEP {num}</div>
              <p className="text-xl font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed text-[#51608f] mt-6">
          作成したメモはGoogle Docs形式で共有します。
          採用担当の方が必要に応じて文言を調整してから、現場面談者へ共有できます。
        </p>
      </section>

      {/* What it organizes */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          面談前に、ここまで整理します
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>・求人と候補者経験が重なる実務場面</li>
            <li>・現場面談者が見ておきたいポイント</li>
            <li>・そのまま使える質問・話すきっかけ</li>
            <li>・質問の根拠となる求人と経歴の接点</li>
            <li>・採用担当から現場に共有したい一言メモ</li>
            <li>・候補者が気にしそうなこと</li>
          </ul>
        </div>
      </section>

      {/* Candidate-specific sample cards */}
      <section id="sample" className="max-w-5xl mx-auto px-8 py-12">
        <p className="text-sm font-bold text-[#2aa7a1] mb-3">
          出力サンプル
        </p>

        <h2 className="text-3xl font-bold mb-6">
          現場面談者が迷わないように、
          <br />
          候補者ごとの見るポイントを整理します
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          以下は、架空の求人・候補者情報をもとにしたサンプルです。
          求人票と職務経歴書を見比べて、
          「どこを深掘りするとよさそうか」を現場面談者に渡しやすい形にまとめます。
          <br />
          実際の無料作成では、御社の求人と匿名化した候補者プロフィールをもとに作成します。
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {samples.map((sample) => (
            <div
              key={sample.label}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <p className="text-[#2aa7a1] font-bold mb-2">{sample.label}</p>

              <p className="text-sm font-bold text-[#2d4aa5] mb-3">
                {sample.category}
              </p>

              <h3 className="text-2xl font-bold leading-relaxed mb-3">
                {sample.title}
              </h3>

              <p className="font-bold leading-relaxed mb-6">
                候補者：{sample.candidate}
              </p>

              <div className="grid gap-4 mb-5">
                <div className="rounded-2xl bg-[#f5f5f7] p-5">
                  <p className="font-bold mb-3">求人側</p>
                  <ul className="space-y-2 leading-relaxed text-[#51608f]">
                    {sample.jobNeeds.map((item) => (
                      <li key={item}>・{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#f5f5f7] p-5">
                  <p className="font-bold mb-3">候補者側</p>
                  <ul className="space-y-2 leading-relaxed text-[#51608f]">
                    {sample.candidateExperience.map((item) => (
                      <li key={item}>・{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">👀 見るポイント</p>
                <p className="text-lg font-semibold leading-relaxed">
                  {sample.point}
                </p>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">💬 話題候補</p>
                <ul className="space-y-2 leading-relaxed">
                  {sample.topics.map((topic) => (
                    <li key={topic}>・{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">📝 聞くならこの3問</p>

                <ul className="space-y-3 leading-relaxed">
                  {sample.questions.map((question, index) => (
                    <li key={question}>
                      <span className="font-bold text-[#2aa7a1]">
                        Q{index + 1}.{" "}
                      </span>
                      「{question}」
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4 mb-3">
                  {sample.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#eef2ff] px-3 py-1 text-sm font-semibold text-[#2d4aa5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#667]">根拠：{sample.reason}</p>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5">
                <p className="font-bold mb-3">
                  🤝 候補者が気にしそうなこと
                </p>
                <ul className="space-y-2 leading-relaxed text-[#51608f]">
                  {sample.concerns.map((concern) => (
                    <li key={concern}>・{concern}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Difference */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          その候補者だから聞きたい質問にします
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          一般的な質問ではなく、求人側で求められることと候補者側の経験が重なる場面から、
          面談で確認しやすい質問にします。
        </p>

        <div className="space-y-6">
          {aiComparison.map((item) => (
            <div key={item.normal} className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-sm font-bold text-[#2aa7a1] mb-2">
                一般的な質問
              </p>
              <p className="text-xl mb-5">「{item.normal}」</p>

              <p className="text-sm font-bold text-[#2d4aa5] mb-2">
                明日めんの質問
              </p>
              <p className="text-xl font-semibold leading-relaxed">
                「{item.asumen}」
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Easy trial */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-sm font-bold text-[#2aa7a1] mb-3">
            無料作成で必要なもの
          </p>

          <h2 className="text-3xl font-bold mb-6">
            送るものは、求人URLと匿名プロフィールだけ。
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-6">
            候補者名・連絡先・顔写真などは不要です。
            求人URLと、個人を特定できない形にした候補者プロフィールを送っていただければ、
            1件分の面談メモを作成してお返しします。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="font-bold mb-3">1. 求人URL</p>
              <p className="leading-relaxed text-[#51608f]">
                Wantedly・採用ページ・募集要項など
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="font-bold mb-3">2. 匿名プロフィール</p>
              <p className="leading-relaxed text-[#51608f]">
                職務経験・スキル・自己PRなど
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="font-bold mb-3">3. Google Docsで共有</p>
              <p className="leading-relaxed text-[#51608f]">
                必要に応じて文言調整・PDF化も可能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it does / does not do */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-5">明日めんがやること</h2>

            <ul className="space-y-4 text-lg leading-relaxed">
              <li>・求人票と候補者経験の接点を整理する</li>
              <li>・面談で確認したい実務場面を見つける</li>
              <li>・現場面談者に渡せる候補者別メモを作る</li>
              <li>・候補者が気にしそうなことも整理する</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-5">
              明日めんがやらないこと
            </h2>

            <ul className="space-y-4 text-lg leading-relaxed">
              <li>・採用可否を判定しない</li>
              <li>・候補者をスコアリングしない</li>
              <li>・個人情報の入力を前提にしない</li>
              <li>・面談担当者の判断を代替しない</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            個人を特定できる情報は不要です
          </h2>

          <p className="text-xl leading-relaxed mb-4">
            候補者名・住所・電話番号・メールアドレス・顔写真・SNS URLなど、
            個人を直接特定できる情報は入力しないでください。
          </p>

          <p className="text-xl leading-relaxed text-[#51608f]">
            職務経験・スキル・自己PRなど、面談準備に必要な範囲だけで利用できます。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          まずは、御社の求人で1件作成します
        </h2>

        <p className="text-xl leading-relaxed text-[#51608f] mb-8">
          求人URLと匿名化した候補者プロフィールを送っていただければ、
          <br />
          現場面談者に渡せる「候補者別の面談前メモ」を1件無料で作成します。
          <br />
          通常1〜2営業日以内を目安に、Google Docs形式で共有します。
          <br />
          必要に応じて、文言調整やPDF化も可能です。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#2d4aa5] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            無料で1件作成する
          </a>

          <a
            href="#sample"
            className="inline-block bg-white text-[#2d4aa5] border border-[#2d4aa5] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#eef2ff] transition"
          >
            サンプルメモを見る
          </a>
        </div>

        <p className="mt-6 text-sm text-[#667]">
          ※候補者名・連絡先・住所・顔写真などは伏せた状態でご利用ください。
        </p>
      </section>
    </main>
  );
}