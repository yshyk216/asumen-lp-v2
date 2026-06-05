const TALLY_FORM_URL = "https://tally.so/r/Pdk2rB";

const samples = [
  {
    label: "SAMPLE 01",
    category: "SaaS CS / 導入支援",
    title: "BtoB SaaS カスタマーサクセス",
    candidate: "法人営業3年・SaaS未経験",
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
          明日めんは、求人票と匿名化した候補者プロフィールから、
          <br />
          現場面談者に渡せる「候補者別の面談メモ」を作成するAIです。
        </p>

        <p className="text-lg leading-relaxed text-[#51608f] mb-10">
          採用判断ではなく、面談前に「この候補者と何を話すとよさそうか」を整理します。
          <br />
          求人票と候補者プロフィールの接点から、見るべきポイント・聞くべき質問・候補者が気にしそうなことを1枚にまとめます。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#2d4aa5] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition text-center"
          >
            無料で1件作ってもらう
          </a>

          <a
            href="#sample"
            className="inline-block bg-white text-[#2d4aa5] border border-[#2d4aa5] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#eef2ff] transition text-center"
          >
            サンプルメモを見る
          </a>
        </div>

        <p className="mt-5 text-sm text-[#667]">
          ※実際の求人で確認したい方は、無料作成フォームをご利用ください。
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          採用担当として、こんなことありませんか？
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>・現場面談者に、候補者ごとの事前共有をするのが大変</li>
            <li>・面談直前まで、候補者情報を読んでもらえないことがある</li>
            <li>・面談担当者によって、話題や深掘りの質にばらつきがある</li>
            <li>
              ・現場面談者に毎回「候補者情報を読んでおいてください」と伝える負担がある
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">
          使い方は、たった3ステップ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["1", "求人票・募集要項を送る"],
            ["2", "匿名プロフィールを送る"],
            ["3", "共有しやすい1枚メモを受け取る"],
          ].map(([num, text]) => (
            <div key={num} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-[#2aa7a1] font-bold mb-3">STEP {num}</div>
              <p className="text-xl font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-lg leading-relaxed text-[#51608f] mt-6">
          作成したメモはGoogle Docs形式で共有します。必要に応じて文言を調整してから、
          現場面談者の方へ共有いただけます。
        </p>
      </section>

      {/* What it organizes */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          面談前に、候補者ごとの確認観点を整理します
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>・求人と候補者経験が重なる実務場面</li>
            <li>・現場面談者が見ておきたいポイント</li>
            <li>・そのまま使える質問・話すきっかけ</li>
            <li>・質問の根拠となる求人と経歴の接点</li>
            <li>・候補者が気にしそうなこと</li>
          </ul>
        </div>
      </section>

      {/* How it generates */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          どのように面談メモを作るか
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-xl leading-relaxed text-[#51608f] mb-6">
            明日めんは、求人票と候補者プロフィールをそのまま要約するのではなく、
            求人側の業務内容と候補者側の経験が重なる部分を整理し、
            現場面談者が自然に話せる確認観点に変換します。
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              ["1", "求人側の業務内容を整理"],
              ["2", "候補者側の経験を整理"],
              ["3", "重なる実務場面を抽出"],
              ["4", "確認観点と質問に変換"],
              ["5", "現場に渡せる形に整形"],
            ].map(([num, text]) => (
              <div key={num} className="rounded-2xl bg-[#f5f5f7] p-5">
                <div className="text-[#2aa7a1] font-bold mb-2">STEP {num}</div>
                <p className="font-bold leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-[#667] mt-6">
            出力は、見るポイント・話題候補・質問・根拠・候補者が気にしそうなことの形で整理します。
            採用可否の判断や候補者のスコアリングは行いません。
          </p>
        </div>
      </section>

      {/* Candidate-specific sample cards */}
      <section id="sample" className="max-w-5xl mx-auto px-8 py-12">
        <p className="text-sm font-bold text-[#2aa7a1] mb-3">
          出力サンプル
        </p>

        <h2 className="text-3xl font-bold mb-6">
          候補者ごとに、面談で見るべきポイントが変わります
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          以下は、架空の求人・候補者情報をもとにしたサンプルです。
          実際の無料作成では、御社の求人と匿名化した候補者プロフィールをもとに、
          現場面談者に渡しやすい形に整えてお送りします。
          <br />
          作成したメモはGoogle Docs形式で共有し、必要に応じて文言調整やPDF化も可能です。
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

              <p className="font-bold leading-relaxed mb-2">
                候補者：{sample.candidate}
              </p>

              <p className="text-[#51608f] leading-relaxed mb-6">
                {sample.point}
              </p>

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
                <p className="font-bold mb-3">🤝 候補者が気にしそうなこと</p>
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
          普通の質問AIとの違い
        </h2>

        <div className="space-y-6">
          {aiComparison.map((item) => (
            <div key={item.normal} className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-sm font-bold text-[#2aa7a1] mb-2">
                普通の質問AI
              </p>
              <p className="text-xl mb-5">「{item.normal}」</p>

              <p className="text-sm font-bold text-[#2d4aa5] mb-2">
                明日めん
              </p>
              <p className="text-xl font-semibold leading-relaxed">
                「{item.asumen}」
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What it does / does not do */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-5">
              明日めんがやること
            </h2>

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
          現場面談者に渡せる「候補者別の面談メモ」を1件無料で作成します。
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
            無料で1件作ってもらう
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