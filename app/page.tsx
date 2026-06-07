const TALLY_FORM_URL = "https://tally.so/r/Pdk2rB";
const TALLY_EMBED_URL =
  "https://tally.so/embed/Pdk2rB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const samples = [
  {
    label: "SAMPLE 01",
    category: "SaaS CS / 導入支援",
    title: "BtoB SaaS カスタマーサクセス",
    candidate: "法人営業3年・SaaS未経験",
    summary: {
      experience: "法人営業・顧客折衝の経験あり。",
      focus: "CS業務理解・導入後の伴走・未経験領域の学び方",
    },
    points: [
      "導入後の顧客支援の実務感をどこまで理解しているか",
      "顧客要望を整理し、社内でどう調整していたか",
      "営業経験を導入支援にどうつなげられそうか",
    ],
    questions: [
      {
        title: "導入後の顧客支援",
        text: "初めて扱う業務を任された時って、まず何から理解することが多かったですか？",
        focus: "職種理解 / 業務理解 / キャッチアップ",
      },
      {
        title: "複数顧客対応",
        text: "複数の顧客対応や社内確認が重なった時って、まず何から整理してました？",
        focus: "優先順位 / 初動 / 整理",
      },
      {
        title: "顧客要望の整理と相談",
        text: "顧客から『もっとこう使いたい』と相談された時って、どこまで自分で整理して、どこから周りに相談してました？",
        focus: "顧客対応 / 情報整理 / 相談",
      },
    ],
    feedbacks: [
      "導入後の顧客支援の実務感を理解していそうか",
      "未経験領域をどうキャッチアップしてきたか",
      "顧客要望への対応で具体例が出たか",
    ],
    concerns: [
      "未経験領域のサポート",
      "導入後の伴走体制",
      "SaaSや管理画面の学び方",
    ],
  },
  {
    label: "SAMPLE 02",
    category: "BPO / オペレーション",
    title: "BPOオペレーションリーダー",
    candidate: "コールセンターSV経験あり",
    summary: {
      experience: "SV・応対品質改善の経験あり。",
      focus: "現場改善・優先順位・仕組み化",
    },
    points: [
      "既存オペレーションの管理経験を改善業務にどう広げられそうか",
      "メンバー対応と顧客要望が重なる場面でどう優先順位を決めていたか",
      "属人的な対応を仕組み化した経験があるか",
    ],
    questions: [
      {
        title: "現場改善の進め方",
        text: "現場でミスや遅延が続いた時って、原因をどう整理して改善してました？",
        focus: "品質改善 / 原因整理 / 現場理解",
      },
      {
        title: "優先順位のつけ方",
        text: "メンバーの稼働状況と顧客要望がぶつかった時って、まず何から整理してました？",
        focus: "優先順位 / 整理 / 顧客対応",
      },
      {
        title: "属人化への対応",
        text: "属人的になっていた業務を、他の人でも回せるようにした経験ってありますか？",
        focus: "仕組み化 / 共有 / 改善提案",
      },
    ],
    feedbacks: [
      "現場改善を具体的な手順で話せたか",
      "顧客要望とメンバー稼働の優先順位が具体的だったか",
      "属人化を仕組み化した経験が出たか",
    ],
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
    summary: {
      experience: "PMO・関係者調整の経験あり。",
      focus: "要件整理・合意形成・定着支援",
    },
    points: [
      "PMO経験を顧客業務に踏み込む導入支援にどうつなげられそうか",
      "要望が曖昧な状態で、どこから整理していたか",
      "導入後に現場で使われる状態まで意識できそうか",
    ],
    questions: [
      {
        title: "曖昧な要望の整理",
        text: "顧客の要望が曖昧な状態だった時って、まず何から確認してました？",
        focus: "要件整理 / 情報整理 / 顧客対応",
      },
      {
        title: "複数部門との合意形成",
        text: "複数部門の意見が割れた時って、どのあたりが一番すり合わせしづらかったですか？",
        focus: "合意形成 / 関係者調整 / 期待値調整",
      },
      {
        title: "導入後の定着支援",
        text: "導入後に現場で使われないリスクがありそうな時って、どこを先に確認してました？",
        focus: "定着支援 / 現場理解 / 確認",
      },
    ],
    feedbacks: [
      "曖昧な要望を整理する具体例が出たか",
      "複数部門とのすり合わせ経験が具体的だったか",
      "導入後の定着まで意識して話せたか",
    ],
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
      "メンバーの稼働状況と顧客要望がぶつかった時って、まず何から整理してました？",
  },
  {
    normal: "トラブル対応経験を教えてください。",
    asumen:
      "現場でミスや遅延が続いた時って、原因をどう整理して改善してました？",
  },
  {
    normal: "新しい知識をキャッチアップできますか？",
    asumen:
      "初めて扱う業務を任された時って、まず何から理解することが多かったですか？",
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
      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16">
        <p className="text-lg mb-4 text-[#2aa7a1] font-semibold">
          WantedlyでCS・導入支援・BPOを採用している方へ
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Wantedly経由のカジュアル面談に、
          <br />
          「これだけ見て入ってください」を。
        </h1>

        <p className="text-2xl leading-relaxed mb-6">
          <span className="font-bold">求人URL</span> と{" "}
          <span className="font-bold">匿名プロフィール</span> から、
          <br />
          現場面談者にそのまま渡せる「面談前メモ」を作成します。
        </p>

        <p className="text-lg leading-relaxed text-[#51608f] mb-10">
          職種理解・自走力・現場再現性を確認しやすくするための、
          <br />
          面談前の補助メモです。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#request"
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
          必要なのは、
          <span className="font-bold text-[#1f2f6f]"> 求人URL </span>
          と
          <span className="font-bold text-[#1f2f6f]">
            {" "}
            匿名プロフィール{" "}
          </span>
          の2つだけ。通常2〜3営業日以内を目安にお返しします。
        </p>
      </section>

      {/* Problem */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          Wantedly採用で、こんなことありませんか？
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>
              ・候補者の共感や雰囲気は良さそうでも、職種理解や自走力までは見えにくい
            </li>
            <li>
              ・現場面談者に「この候補者はここを見てほしい」を都度補足している
            </li>
            <li>
              ・面談後のフィードバックが「良さそうでした」で終わり、次の判断に使いづらい
            </li>
            <li>
              ・候補者ごとの確認観点を整理する時間が足りない
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
            「良さそうでした」で終わらせないために、
            <br />
            候補者ごとの確認観点を整理します。
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-8">
            求人内容と匿名プロフィールの接点をもとに、
            <br />
            現場面談者が短時間で読みやすい面談前メモを作成します。
            </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">1</p>
              <p className="text-xl font-bold leading-relaxed">
                見るポイントを整理
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">2</p>
              <p className="text-xl font-bold leading-relaxed">
                そのまま聞ける3問に変換
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <p className="text-[#2aa7a1] font-bold mb-3">3</p>
              <p className="text-xl font-bold leading-relaxed">
                面談後に残す観点も整理
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
            候補者によって、見るべき観点が変わりやすい求人に向いています。
          </h2>

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
            ["3", "面談前メモを受け取る"],
          ].map(([num, text]) => (
            <div key={num} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-[#2aa7a1] font-bold mb-3">STEP {num}</div>
              <p className="text-xl font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[#eef2ff] p-6">
          <p className="text-lg leading-relaxed text-[#51608f]">
            必要なのは、
            <span className="font-bold text-[#1f2f6f]"> 求人URL </span>
            と
            <span className="font-bold text-[#1f2f6f]">
              {" "}
              匿名プロフィール{" "}
            </span>
            の2つだけ。
            <br />
            作成した面談前メモはGoogle Docs形式で共有します。
          </p>
        </div>
      </section>

      {/* Sample */}
      <section id="sample" className="max-w-5xl mx-auto px-8 py-12">
        <p className="text-sm font-bold text-[#2aa7a1] mb-3">
          出力サンプル
        </p>

        <h2 className="text-3xl font-bold mb-6">
          実際にお返しする面談前メモのイメージです
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          以下は、架空の求人内容・匿名プロフィールをもとにしたサンプルです。
          <br />
          実際の無料作成では、御社の求人URLと匿名プロフィールをもとに作成します。
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

              <p className="font-bold leading-relaxed mb-5">
                候補者：{sample.candidate}
              </p>

              <div className="rounded-2xl bg-[#eef2ff] p-5 mb-5">
                <p className="font-bold mb-2">{sample.summary.experience}</p>
                <p className="leading-relaxed text-[#51608f]">
                  「{sample.summary.focus}」あたりを確認できるとよさそう。
                </p>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">👀 まず見るポイント</p>
                <ul className="space-y-2 leading-relaxed">
                  {sample.points.map((point) => (
                    <li key={point}>・{point}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">💬 聞くならこの3問</p>

                <div className="space-y-5">
                  {sample.questions.map((question, index) => (
                    <div key={question.text}>
                      <p className="font-bold text-[#2aa7a1] mb-2">
                        {index + 1}. {question.title}
                      </p>

                      <p className="text-lg font-semibold leading-relaxed mb-2">
                        「{question.text}」
                      </p>

                      <p className="text-sm text-[#667]">
                        見る観点：{question.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">
                  📝 面談後フィードバックで見てほしいこと
                </p>
                <ul className="space-y-2 leading-relaxed text-[#51608f]">
                  {sample.feedbacks.map((feedback) => (
                    <li key={feedback}>・{feedback}</li>
                  ))}
                </ul>
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

        <div className="mt-10 bg-[#eef2ff] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            このような面談前メモを、御社の求人で作成します
          </h3>

          <p className="text-lg leading-relaxed text-[#51608f] mb-6">
            必要なのは、
            <span className="font-bold text-[#1f2f6f]"> 求人URL </span>
            と
            <span className="font-bold text-[#1f2f6f]">
              {" "}
              匿名プロフィール{" "}
            </span>
            の2つだけ。
            <br />
            現場面談者に渡せる面談前メモを1件無料で作成します。
          </p>

          <a
            href="#request"
            className="inline-block bg-[#2d4aa5] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition text-center"
          >
            無料で1件作成する
          </a>
        </div>
      </section>

      {/* Difference */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          一般論ではなく、現場で確認すべき場面に変換します
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          「コミュニケーション力はありますか？」のような一般的な質問ではなく、
          <br />
          求人側で求められることと候補者側の経験が重なる場面から、
          面談で確認しやすい質問にします。
        </p>

        <div className="space-y-6">
          {aiComparison.map((item) => (
            <div
              key={item.normal}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
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

      {/* What it does / does not do */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-5">明日めんがやること</h2>

            <ul className="space-y-4 text-lg leading-relaxed">
              <li>・求人内容と匿名プロフィールの接点を整理する</li>
              <li>・面談で確認したい実務場面を見つける</li>
              <li>・現場面談者に渡せる面談前メモを作る</li>
              <li>・面談後に残すとよさそうな観点も整理する</li>
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
              <li>・ミスマッチ防止を保証しない</li>
              <li>・個人情報の入力を前提にしない</li>
              <li>・面談担当者の判断を代替しない</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-5xl mx-auto px-8 pt-12 pb-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            個人を特定できる情報は不要です
          </h2>

          <p className="text-xl leading-relaxed mb-4">
            候補者名・住所・電話番号・メールアドレス・顔写真・SNS URLなど、
            <br />
            個人を直接特定できる情報は入力しないでください。
          </p>

          <p className="text-xl leading-relaxed text-[#51608f]">
            匿名プロフィールには、職務経験・スキル・自己PRなど、
            面談準備に必要な範囲だけを記載してください。
          </p>
        </div>
      </section>

      {/* Embedded request form */}
      <section id="request" className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <p className="text-sm font-bold text-[#2aa7a1] mb-3">
            無料作成フォーム
          </p>

          <h2 className="text-3xl font-bold mb-6">
            まずは、御社の求人で1件作成します
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-8">
            必要なのは、
            <span className="font-bold text-[#1f2f6f]"> 求人URL </span>
            と
            <span className="font-bold text-[#1f2f6f]">
              {" "}
              匿名プロフィール{" "}
            </span>
            の2つだけ。
            <br />
            内容確認後、通常2〜3営業日以内を目安に、Google Docs形式で共有します。
          </p>

          <div className="rounded-2xl bg-[#f5f5f7] p-4">
            <iframe
              src={TALLY_EMBED_URL}
              width="100%"
              height="820"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="明日めん 無料作成フォーム"
            />
          </div>

          <p className="mt-4 text-sm text-[#667] text-center">
            フォームが表示されない場合は{" "}
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#2d4aa5] underline"
            >
              こちらから入力できます
            </a>
            。
          </p>

          <p className="mt-4 text-sm text-[#667] text-center">
            ※候補者名・連絡先・住所・顔写真などは伏せた状態でご利用ください。
          </p>
        </div>
      </section>
    </main>
  );
}