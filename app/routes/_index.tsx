import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "<Frontend Notes />" },
    {
      name: "description",
      content:
        "どこかに投稿するほどではないけれど、気軽にメモしておきたいことやTipsを記録するブログです。",
    },
    { keywords: "ブログ, メモ, Tips, 個人ブログ, アウトプット" },
  ];
};



export default function Index() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>「ちょっとした気づきやメモを気楽にアウトプット。ゆるく更新していきます。」</div>
      <div>

      </div>
    </div>
  );
}
