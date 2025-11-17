# Security Policy

## Release Security

このプロジェクトでは、サプライチェーン攻撃を防ぐため、以下のセキュリティ対策を実施しています。

### 🔒 実装済みの対策

#### 1. GitHub Environment Protection
- **環境名**: `npm-publish`
- **保護レベル**: 要手動承認（推奨設定）
- リリース時に信頼できる管理者の承認が必須

#### 2. タグとバージョンの検証
- セマンティックバージョニング形式の強制 (`vX.Y.Z`)
- package.jsonのバージョンとGitタグの一致確認
- 不正なタグによる公開を防止

#### 3. 依存関係の整合性チェック
- `package-lock.json`の整合性検証
- `npm audit`による脆弱性スキャン
- 高リスクの依存関係を検出

#### 4. ビルド成果物の検証
- 必須ファイルの存在確認
- 空ディレクトリの検出
- 改ざん防止

#### 5. GitHub Actions セキュリティ
- アクションをSHA256ハッシュで固定（タグ改ざん対策）
- 最小権限の原則（`permissions`で制限）
- Provenance署名によるパッケージの証明

#### 6. NPM Provenance
- `--provenance`フラグで公開
- 署名付きビルド証明書を生成
- サプライチェーンの透明性を確保

### 🛡️ 推奨する追加設定

#### GitHubリポジトリ設定

1. **ブランチ保護ルール** (`main`/`master`)
   ```
   Settings → Branches → Add rule
   - Require pull request reviews before merging
   - Require status checks to pass
   - Require signed commits (推奨)
   - Do not allow bypassing the above settings
   ```

2. **タグ保護ルール**
   ```
   Settings → Tags → Add rule
   - Tag name pattern: v*
   - Require signed commits
   - 管理者のみタグ作成可能に設定
   ```

3. **Environment Protection** (`npm-publish`)
   ```
   Settings → Environments → npm-publish
   - Required reviewers: 信頼できる管理者を追加
   - Wait timer: 5分（誤操作防止）
   - Deployment branches: タグのみ許可
   ```

4. **Workflow保護**
   ```
   Settings → Actions → General
   - Require approval for all outside collaborators
   - Fork pull request workflows: Require approval for first-time contributors
   ```

#### NPM設定

1. **2要素認証 (2FA) を有効化**
   ```bash
   npm profile enable-2fa auth-and-writes
   ```

2. **NPM Token スコープを限定**
   - Automation token (推奨)
   - 公開のみ許可（読み取り・削除権限なし）
   - トークンの定期更新

3. **パッケージ設定**
   ```bash
   # npmウェブサイトで設定
   - Require 2FA for package publishing
   - Enable package provenance
   ```

### 🚨 セキュリティインシデント対応

#### NPM Tokenが漏洩した場合

1. **即座にトークンを無効化**
   ```bash
   # npmウェブサイト → Access Tokens → Revoke
   ```

2. **GitHub Secretsを更新**
   ```
   Settings → Secrets and variables → Actions → NPM_TOKEN
   ```

3. **最近のリリースを確認**
   ```bash
   npm view react-github-ribbons versions --json
   ```

4. **不正なバージョンがあれば削除**
   ```bash
   npm unpublish react-github-ribbons@x.x.x
   ```

#### 不審なタグが作成された場合

1. **タグを削除**
   ```bash
   git tag -d v1.2.3
   git push --delete origin v1.2.3
   ```

2. **GitHub Actionsログを確認**
   ```
   Actions → Publish to npm → 該当ワークフローの確認
   ```

3. **環境保護で承認前なら拒否**

### 📋 リリースチェックリスト

リリース担当者は以下を確認してください：

- [ ] `package.json`のバージョンが正しい
- [ ] `CHANGELOG.md`が更新されている
- [ ] すべてのテストが通過
- [ ] `npm audit`で高リスクの脆弱性がない
- [ ] タグ名がセマンティックバージョニングに準拠
- [ ] コミットが署名されている（推奨）
- [ ] 信頼できるブランチからのリリース

### 🔗 参考資料

- [npm Provenance](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub Actions Security](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Supply Chain Security Best Practices](https://slsa.dev/)

### 報告

セキュリティ上の懸念や脆弱性を発見した場合は、公開のIssueではなく、
リポジトリ管理者に直接連絡してください。
