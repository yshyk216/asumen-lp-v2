const TALLY_FORM_URL = "https://tally.so/r/Pdk2rB";
const DIFY_DEMO_URL = "https://udify.app/workflow/OWNvPzEkN6nAn52F";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1f2f6f]">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <p className="text-lg mb-4 text-[#2aa7a1] font-semibold">
          採用担当の方へ
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          面談前5分で、
          <br />
          現場面談者に渡せるメモができる。
        </h1>

        <p className="text-2xl leading-relaxed mb-6">
          明日めんは、求人票と匿名化した候補者プロフィールから、
          <br />
          現場面談者に渡せる「候補者別の面談メモ」を作成するAIです。
        </p>

        <p className="text-lg leading-relaxed text-[#51608f] mb-10">
          採用判断ではなく、面談前に「この候補者と何を話すとよさそうか」を整理します。
          <br />
          現場面談者に「これだけ見て入ってください」と共有しやすい形でまとめます。
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
            href={DIFY_DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-[#2d4aa5] border border-[#2d4aa5] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#eef2ff] transition text-center"
          >
            デモ版で出力イメージを見る
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
            <li>・面談後のフィードバックが浅く、次の判断材料が集まりにくい</li>
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
            ["1", "求人票・募集要項を貼る"],
            ["2", "匿名プロフィールを貼る"],
            ["3", "現場面談者に渡せるメモが完成"],
          ].map(([num, text]) => (
            <div key={num} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-[#2aa7a1] font-bold mb-3">STEP {num}</div>
              <p className="text-xl font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it organizes */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          面談前に、こんな話題を整理します
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <ul className="space-y-4 text-xl leading-relaxed">
            <li>・求人と経験が重なる実務場面</li>
            <li>・そのまま使える話すきっかけ</li>
            <li>・面談官が見ておきたい観点タグ</li>
            <li>・候補者が気にしそうなこと</li>
          </ul>
        </div>
      </section>

      {/* Candidate-specific sample cards */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">
          同じ求人でも、候補者によって話題が変わります
        </h2>

        <p className="text-lg leading-relaxed text-[#51608f] mb-8">
          明日めんは、汎用的な質問リストではなく、
          求人内容と候補者の経験が重なる部分から、現場面談者が自然に話せる話題を整理します。
        </p>

        <p className="text-sm font-bold text-[#2aa7a1] mb-3">
          例：配信業界の求人
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              label: "A：配信オペ経験者",
              title: "候補者Aさん 面談メモ",
              summary: "リハーサル・本番対応の経験あり。",
              description:
                "配信前確認・本番中の急ぎ対応・配信設計への接続あたりを話せるとよさそう。",
              topics: [
                "リハーサル前の確認",
                "本番中のトラブル対応",
                "配信設計への接続",
              ],
              questionTitle: "配信構成の確認",
              question:
                "リハーサルや本番前に、配信構成で不明点があった時って、まず何を確認してました？",
              tags: ["確認", "配信構成", "現場対応"],
              reason: "配信オペ経験 × リハーサル対応",
            },
            {
              label: "B：イベント制作経験者",
              title: "候補者Bさん 面談メモ",
              summary: "進行管理・関係者調整の経験あり。",
              description:
                "複数案件の整理・進行変更・クライアント要望の調整あたりを話せるとよさそう。",
              topics: [
                "複数案件の整理",
                "進行変更への対応",
                "クライアント要望の調整",
              ],
              questionTitle: "進行変更への対応",
              question:
                "ハイブリッドイベントで進行変更が入った時って、まず誰と何を確認してました？",
              tags: ["進行管理", "関係者調整", "確認"],
              reason: "イベント制作経験 × 配信案件調整",
            },
            {
              label: "C：音響経験者",
              title: "候補者Cさん 面談メモ",
              summary: "音響確認・現場対応の経験あり。",
              description:
                "音響確認・音声トラブル・専門外の相談ラインあたりを話せるとよさそう。",
              topics: [
                "音響確認と進行確認",
                "音声トラブルの切り分け",
                "専門外の相談ライン",
              ],
              questionTitle: "音声トラブルの切り分け",
              question:
                "本番中に音声トラブルが起きた時って、まずどこから原因を切り分けてました？",
              tags: ["切り分け", "初動", "現場対応"],
              reason: "音響経験 × 本番中の音声対応",
            },
          ].map((sample) => (
            <div key={sample.label} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-[#2aa7a1] font-bold mb-3">{sample.label}</p>

              <h3 className="text-2xl font-bold leading-relaxed mb-3">
                {sample.title}
              </h3>

              <p className="font-bold leading-relaxed mb-2">
                {sample.summary}
              </p>

              <p className="text-[#51608f] leading-relaxed mb-6">
                {sample.description}
              </p>

              <div className="border-t border-[#e5e7eb] pt-5 mb-5">
                <p className="font-bold mb-3">👀 話題候補</p>
                <ul className="space-y-2 leading-relaxed">
                  {sample.topics.map((topic) => (
                    <li key={topic}>・{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#e5e7eb] pt-5">
                <p className="font-bold mb-3">💬 話すきっかけ</p>

                <p className="text-sm font-bold text-[#2aa7a1] mb-2">
                  {sample.questionTitle}
                </p>

                <p className="text-lg font-semibold leading-relaxed mb-4">
                  「{sample.question}」
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
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
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-bold text-[#2aa7a1] mb-2">
              普通の質問AI
            </p>
            <p className="text-xl mb-5">
              「優先順位はどうつけていますか？」
            </p>

            <p className="text-sm font-bold text-[#2d4aa5] mb-2">
              明日めん
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              「ハイブリッドイベントで進行変更が入った時って、
              まず誰と何を確認してました？」
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-bold text-[#2aa7a1] mb-2">
              普通の質問AI
            </p>
            <p className="text-xl mb-5">
              「トラブル対応経験を教えてください。」
            </p>

            <p className="text-sm font-bold text-[#2d4aa5] mb-2">
              明日めん
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              「本番中に音声トラブルが起きた時って、
              まずどこから原因を切り分けてました？」
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-sm font-bold text-[#2aa7a1] mb-2">
              普通の質問AI
            </p>
            <p className="text-xl mb-5">
              「新しい知識をキャッチアップできますか？」
            </p>

            <p className="text-sm font-bold text-[#2d4aa5] mb-2">
              明日めん
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              「知らないツールを使うことになった時って、
              まずどこまで自分で触って、どこから周りに聞いてました？」
            </p>
          </div>
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
              <li>・面談で話しやすい実務場面を見つける</li>
              <li>・現場面談者に渡せる候補者別メモを作る</li>
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
            </ul>
          </div>
        </div>
      </section>

      {/* Demo note */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            デモ版について
          </h2>

          <p className="text-xl leading-relaxed text-[#51608f] mb-4">
            デモ版は、出力イメージを確認するための簡易版です。
            Dify上の画面で、求人票と匿名化した候補者プロフィールを貼ると、
            その場で「候補者別の面談メモ」の雰囲気を確認できます。
          </p>

          <p className="text-lg leading-relaxed text-[#667] mb-4">
            ※デモ版でも、候補者名・連絡先・住所・顔写真・SNS URLなど、
            個人を直接特定できる情報は入力しないでください。
          </p>

          <p className="text-lg leading-relaxed text-[#667]">
            ※実際の無料作成では、現場面談者に渡しやすい形に整えてお送りします。
          </p>
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
          デモ版は出力イメージの確認用です。
          <br />
          実際の無料作成では、現場に共有しやすい形に整えてお送りします。
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
            href={DIFY_DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-[#2d4aa5] border border-[#2d4aa5] px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#eef2ff] transition"
          >
            デモ版で出力イメージを見る
          </a>
        </div>

        <p className="mt-6 text-sm text-[#667]">
          ※通常1〜2営業日以内を目安に、メールでご連絡します。
        </p>

        <p className="mt-2 text-sm text-[#667]">
          ※候補者名・連絡先・住所・顔写真などは伏せた状態でご利用ください。
        </p>
      </section>
    </main>
  );
}