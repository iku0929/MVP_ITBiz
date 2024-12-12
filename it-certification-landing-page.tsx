import React from 'react';
import { Check, BookOpen, Trophy, Clock } from 'lucide-react';

const CertificationLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <header className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          キャリアを加速！IT資格試験完全対策サービス
        </h1>
        <p className="text-xl mb-8">
          最新のAI技術で、あなたの合格を最短距離でサポート
        </p>
        <a 
          href="#signup" 
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition"
        >
          今すぐ無料登録
        </a>
      </header>

      {/* 特徴セクション */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="text-blue-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">
              最適化された学習プラン
            </h2>
            <p>
              AIが一人ひとりの学習スタイルと弱点を分析し、
              個別最適化された学習ロードマップを提供します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Trophy className="text-blue-600 w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">
              高合格率
            </h2>
            <p>
              これまでの合格率は75%以上。
              実績に裏打ちされた効果的な学習メソッドで、
              あなたの目標達成をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* 対応資格セクション */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            対応資格一覧
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'AWS認定ソリューションアーキテクト',
              'CompTIA Security+',
              '情報処理技術者試験（基本/応用）',
              'CCNA',
              'Python認定プログラミング試験',
              '日商PC検定'
            ].map((cert, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition"
              >
                <Check className="mx-auto text-blue-600 mb-2" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          料金プラン
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4">スタンダード</h3>
            <p className="text-4xl font-bold text-blue-600 mb-4">
              月額3,980円
            </p>
            <ul className="space-y-2 mb-6">
              <li>全資格の基本教材</li>
              <li>AI学習診断</li>
              <li>月2回の模擬試験</li>
            </ul>
            <a 
              href="#signup" 
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              選択する
            </a>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center transform scale-105">
            <h3 className="text-2xl font-semibold mb-4">プレミアム</h3>
            <p className="text-4xl font-bold mb-4">
              月額6,980円
            </p>
            <ul className="space-y-2 mb-6">
              <li>全資格の詳細教材</li>
              <li>パーソナルメンター付き</li>
              <li>週1回の個別オンライン講座</li>
              <li>無制限模擬試験</li>
            </ul>
            <a 
              href="#signup" 
              className="w-full bg-white text-blue-600 py-3 rounded-full hover:bg-blue-50 transition"
            >
              選択する
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-4">エンタープライズ</h3>
            <p className="text-4xl font-bold text-blue-600 mb-4">
              要相談
            </p>
            <ul className="space-y-2 mb-6">
              <li>法人向けカスタマイズプラン</li>
              <li>チーム全体の学習管理</li>
              <li>専任サポート</li>
            </ul>
            <a 
              href="#signup" 
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* コールトゥアクションセクション */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          今すぐキャリアの可能性を広げよう
        </h2>
        <p className="text-xl mb-8">
          14日間の無料トライアルで、サービスの魅力を体験できます
        </p>
        <a 
          href="#signup" 
          className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-100 transition"
        >
          無料トライアル開始
        </a>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2024 IT資格試験対策サービス. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CertificationLandingPage;
